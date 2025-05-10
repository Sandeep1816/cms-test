import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      include: {
        stats: true,
        attendees: true,
        delegates: true,
        speakers: true,
        marketingCampaigns: true,
        leads: true,
        sessions: true,
        exhibitors: true,
        sponsors: true,
        partners: true,
        mediaPartners: true,
        orders: true,
        enquiries: true,
        utmData: true,
        agendaDays: {
          include: {
            sessions: true, // if you want to dive deeper into AgendaDay
          },
        },
      },
    })

    return NextResponse.json(projects)
  } catch (error) {
    console.error('Error fetching projects:', error)
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 })
  }
}
