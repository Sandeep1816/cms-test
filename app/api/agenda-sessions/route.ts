import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const sessions = await prisma.agendaSession.findMany({
      include: {
        day: true,
        items: true,
      },
    })
    return NextResponse.json(sessions)
  } catch (error) {
    console.error('Error fetching agenda sessions:', error)
    return NextResponse.json({ error: 'Failed to load sessions' }, { status: 500 })
  }
}
