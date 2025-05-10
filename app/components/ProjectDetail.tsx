// app/components/ProjectDetail.tsx
'use client';

import Image from 'next/image';
import { notFound } from 'next/navigation';

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

interface ProjectDetailProps {
  project: Project | null;
  error: string | null;
}

export default function ProjectDetail({ project, error }: ProjectDetailProps) {
  if (error) {
    return (
      <div className="min-h-screen p-8 sm:p-20 bg-gray-100 font-[family-name:var(--font-geist-sans)]">
        <p className="text-red-600 text-center font-medium">{error}</p>
      </div>
    );
  }

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 bg-gray-100 font-[family-name:var(--font-geist-sans)]">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-gray-800 mb-6">{project.name}</h1>

        <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
          <div className="relative">
            <Image
              src={project.image || '/placeholder.svg'}
              alt={project.name}
              width={800}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          <div className="p-8">
            <p className="text-sm text-gray-600 italic mb-4">{project.venue}</p>
            <p className="text-base text-gray-700 leading-relaxed mb-6">{project.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Year</p>
                <p className="text-sm text-gray-900">{project.year}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Currency</p>
                <p className="text-sm text-gray-900">{project.currency}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Start Date</p>
                <p className="text-sm text-gray-900">{project.startDate}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">End Date</p>
                <p className="text-sm text-gray-900">{project.endDate}</p>
              </div>
            </div>

            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
            >
              Visit Website →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}