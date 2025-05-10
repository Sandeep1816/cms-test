'use client';

import { useEffect, useState } from "react";
import Image from "next/image";

type Project = {
  _id: string;
  name: string;
  description: string;
  venue: string;
  website: string;
  year: string;
  currency: string;
  startDate: string;
  endDate: string;
};

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        setError("Error loading projects. Please try again later.");
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 bg-gray-100 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-serif font-bold text-center mb-12 text-gray-800">Our Projects</h1>

      {error && <p className="text-red-600 text-center font-medium">{error}</p>}

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {projects.length === 0 ? (
          <p className="col-span-full text-center text-gray-600 font-serif">Loading projects...</p>
        ) : (
          projects.map((project) => (
            <div
              key={project._id}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-200 flex flex-col"
            >
              <div className="relative">
                {/* Placeholder image with a subtle gradient overlay */}
                <Image
                  src="/placeholder.svg"
                  alt={project.name}
                  width={400}
                  height={200}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-serif font-semibold text-gray-900 mb-2">{project.name}</h2>
                <p className="text-sm text-gray-600 italic mb-3">{project.venue}</p>
                <p className="text-sm text-gray-700 line-clamp-3 leading-relaxed">{project.description}</p>

                <div className="mt-auto pt-4">
                  <p className="text-xs text-gray-500 uppercase tracking-wide">
                    {project.year} • {project.currency}
                  </p>
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
                  >
                    Visit Website →
                  </a>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}