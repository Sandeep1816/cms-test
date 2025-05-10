import ProjectCard from './ProjectCard';

interface Project {
  _id: string;
  projectId: string;
  speakers: number;
  partners: number;
  mediaPartners: number;
  sponsors: number;
  exhibitors: number;
  delegates: number;
  createdAt: string;
  updatedAt: string;
}

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  if (projects.length === 0) {
    return (
      <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
        <p>No projects found. Please add some projects to the database.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {projects.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  );
} 