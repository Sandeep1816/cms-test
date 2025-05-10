'use client'
import { useEffect, useState } from 'react'

type AgendaItem = {
  id: string
  title: string
  startTime: string
  endTime: string
  type: string
  description?: string
}

const AgendaItemList = () => {
  const [agendaItems, setAgendaItems] = useState<AgendaItem[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    async function fetchAgendaItems() {
      try {
        const response = await fetch('/api/agenda')
        const data = await response.json()
        setAgendaItems(data)
      } catch (error) {
        console.error('Error fetching agenda items:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchAgendaItems()
  }, [])

  if (loading) {
    return <p>Loading agenda...</p>
  }

  return (
    <div>
      <h2>Agenda</h2>
      <ul>
        {agendaItems.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>
              {new Date(item.startTime).toLocaleTimeString()} -{' '}
              {new Date(item.endTime).toLocaleTimeString()}
            </p>
            <p>Type: {item.type}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AgendaItemList
