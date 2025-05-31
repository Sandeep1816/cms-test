// 'use client';

// import { useEffect, useState } from 'react';
// import Image from 'next/image';

// interface Project {
//   _id: string;
//   name: string;
//   description: string;
//   venue: string;
//   website: string;
//   year: string;
//   currency: string;
//   startDate: string;
//   endDate: string;
//   image?: string;
// }

// export default function ProjectsPage() {
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const response = await fetch('/api/projects');
//         if (!response.ok) {
//           throw new Error('Failed to fetch projects');
//         }
//         const data: Project[] = await response.json();
//         setProjects(data);
//       } catch (error) {
//         setError('Error loading projects. Please try again later.');
//         console.error('Error fetching projects:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProjects();
//   }, []);

//   return (
//     <div className="min-h-screen bg-[#fdfdfd] px-6 py-16 sm:px-12 lg:px-20 font-[family-name:var(--font-geist-sans)]">
//       <h1 className="text-4xl sm:text-5xl font-serif font-bold text-center mb-16 text-gray-900 tracking-tight">
//         Our Projects
//       </h1>

//       {error && <p className="text-red-600 text-center font-medium mb-6">{error}</p>}

//       {loading ? (
//         <p className="text-center text-gray-600 font-serif text-lg">Loading projects...</p>
//       ) : (
//         <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//           {projects.map((project) => (
//             <div
//               key={project._id}
//               className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
//             >
//               <div className="relative">
//                 <Image
//                   src={project.image || '/placeholder.svg'}
//                   alt={project.name}
//                   width={500}
//                   height={250}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
//               </div>

//               <div className="p-6 flex flex-col flex-grow">
//                 <h2 className="text-xl font-serif font-semibold text-gray-800 mb-1">{project.name}</h2>
//                 <p className="text-sm text-gray-500 italic mb-2">{project.venue}</p>
//                 <p className="text-sm text-gray-700 line-clamp-3 leading-relaxed mb-4">{project.description}</p>

//                 <div className="mt-auto border-t pt-4 text-sm text-gray-600">
//                   <p className="text-xs text-gray-500 uppercase tracking-wide">
//                     {project.year} • {project.currency}
//                   </p>
//                   <a
//                     href={project.website}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-block mt-2 text-indigo-600 hover:text-indigo-800 font-medium transition"
//                   >
//                     Visit Website →
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }


'use client';

import { useEffect, useState } from 'react';

interface Project {
  id: string;
  name: string;
  description?: string;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('/api/projects');
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Failed to fetch');
        setProjects(data);
      } catch (err) {
        setError('Failed to load projects.');
        console.error(err);
      }
    };

    fetchProjects();
  }, []);

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      {error && <p className="text-red-500">{error}</p>}
      <ul className="space-y-4">
        {projects.map((p) => (
          <li key={p.id} className="p-4 border rounded shadow-sm">
            <h2 className="text-xl font-semibold">{p.name}</h2>
            <p className="text-gray-600">{p.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
