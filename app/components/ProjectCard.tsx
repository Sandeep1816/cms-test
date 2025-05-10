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

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border rounded p-4 bg-white shadow">
      <h2 className="text-xl font-semibold mb-2">Project ID: {project.projectId}</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p><strong>Speakers:</strong> {project.speakers}</p>
          <p><strong>Partners:</strong> {project.partners}</p>
          <p><strong>Media Partners:</strong> {project.mediaPartners}</p>
        </div>
        <div>
          <p><strong>Sponsors:</strong> {project.sponsors}</p>
          <p><strong>Exhibitors:</strong> {project.exhibitors}</p>
          <p><strong>Delegates:</strong> {project.delegates}</p>
        </div>
      </div>
      <div className="mt-2 text-sm text-gray-600">
        <p>Created: {new Date(project.createdAt).toLocaleString()}</p>
        <p>Updated: {new Date(project.updatedAt).toLocaleString()}</p>
      </div>
    </div>
  );
} 