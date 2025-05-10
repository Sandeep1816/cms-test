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
    return <p className="text-center text-gray-500 py-8">Loading agenda...</p>
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">
        Event Agenda
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {agendaItems.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6"
          >
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-700 mb-3">{item.description}</p>
            <p className="text-sm text-gray-500 mb-1">
              🕒{' '}
              {new Date(item.startTime).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}{' '}
              -{' '}
              {new Date(item.endTime).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </p>
            <p className="text-sm font-medium text-blue-500">Type: {item.type}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AgendaItemList
