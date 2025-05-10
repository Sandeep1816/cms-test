import { prisma } from "./prisma"

type ProjectDB = {
  id: string
  name: string
  description: string | null
  venue: string | null
  website: string | null
  image?: string | null
  year: string
  currency: string | null
  startDate: Date | null
  endDate: Date | null
  createdAt: Date
  updatedAt: Date
}


export async function getProjects() {
  try {
    const projects: ProjectDB[] = await prisma.project.findMany({
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

    return projects.map((project: ProjectDB) => ({
      ...project,
      _id: project.id,
    }))
  } catch (error) {
    console.error("Error fetching projects:", error)
    return []
  }
}
