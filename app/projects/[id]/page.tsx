// app/projects/[id]/page.tsx
import ProjectDetail from '../../components/ProjectDetail';

interface Project {
  _id: string;
  name: string;
  description: string;
  venue: string;
  website: string;
  year: string;
  currency: string;
  startDate: string;
  endDate: string;
  image?: string;
}

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

async function fetchProject(id: string): Promise<{ project: Project | null; error: string | null }> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects/${id}`, {
      cache: 'no-store', // Ensure fresh data for dynamic routes
    });
    if (!response.ok) {
      if (response.status === 404) {
        return { project: null, error: null };
      }
      throw new Error('Failed to fetch project');
    }
    const data: Project = await response.json();
    return { project: data, error: null };
  } catch (error) {
    console.error('Error fetching project:', error);
    return { project: null, error: 'Error loading project. Please try again later.' };
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params; // Await the params Promise to get the id
  const { project, error } = await fetchProject(id);

  return <ProjectDetail project={project} error={error} />;
}

export async function generateStaticParams() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`);
    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }
    const projects: Project[] = await response.json();
    return projects.map((project) => ({
      id: project._id,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}