'use client'

import { useEffect, useState } from 'react'

export default function AgendaSessionsPage() {
  const [sessions, setSessions] = useState([])

  useEffect(() => {
    fetch('/api/agenda-sessions')
      .then((res) => res.json())
      .then((data) => setSessions(data))
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Agenda Sessions</h1>
      {sessions.map((session: any) => (
        <div key={session.id} className="mb-4 p-4 border rounded">
          <h2 className="text-lg font-semibold">{session.title}</h2>
          <p>{session.startTime} - {session.endTime} | Venue: {session.venue}</p>
          <p className="text-sm text-gray-600">Day: {session.day?.date}</p>
          <ul className="list-disc ml-6 mt-2">
            {session.items.map((item: any) => (
              <li key={item.id}>{item.title} ({item.startTime} - {item.endTime})</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
