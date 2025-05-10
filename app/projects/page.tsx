'use client';

import { useEffect, useState } from 'react';

export default function ProjectPage() {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/projects')
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12 sm:px-12 lg:px-24">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 border border-gray-200 overflow-hidden"
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6 flex flex-col justify-between h-full">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{project.name}</h2>
                <p className="text-sm text-gray-500 mt-1">
                  {project.year} • {project.venue}
                </p>
                <p className="text-sm text-gray-700 mt-4 line-clamp-3">{project.description}</p>
              </div>
              <div className="mt-4">
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-blue-700 transition "
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
