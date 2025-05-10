import { NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma' // Correct import

export async function GET() {
  try {
    const agendaItems = await prisma.agendaItem.findMany() // Fetch all agenda items from MongoDB
    return NextResponse.json(agendaItems)
  } catch (error) {
    console.error('Error fetching agenda items:', error)
    return NextResponse.json({ error: 'Error fetching agenda items' }, { status: 500 })
  }
}
