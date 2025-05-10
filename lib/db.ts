import { prisma } from "./prisma"

export async function getProjects() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        name: true,
        description: true,
        venue: true,
        website: true,
        image: true,
        year: true,
        currency: true,
        startDate: true,
        endDate: true,
        createdAt: true,
        updatedAt: true,
      },
    })
    return projects.map(project => ({
      ...project,
      _id: project.id,
    }))
  } catch (error) {
    console.error("Error fetching projects:", error)
    return []
  }
}

export async function getProject(id: string) {
  try {
    const project = await prisma.project.findUnique({
      where: { id },
      include: {
        stats: true,
      },
    })
    if (!project) return null
    return {
      ...project,
      _id: project.id,
    }
  } catch (error) {
    console.error("Error fetching project:", error)
    return null
  }
} 