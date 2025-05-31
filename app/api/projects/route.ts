// // /app/api/projects/route.ts
// import { NextResponse } from 'next/server';
// import { prisma } from '@/lib/prisma';

// export async function GET() {
//   try {
//     const projects = await prisma.project.findMany({
//       select: {
//         _id: true,
//         name: true,
//         description: true,
//         venue: true,
//         website: true,
//         year: true,
//         currency: true,
//         startDate: true,
//         endDate: true,
//         image: true,
//       },
//     });

//     return NextResponse.json(projects);
//   } catch (error) {
//     console.error('Error fetching projects:', error);
//     return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
//   }
// }


import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const projects = await prisma.project.findMany(); // Adjust to your model name
    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}
