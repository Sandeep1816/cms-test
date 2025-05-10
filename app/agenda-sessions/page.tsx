// app/agenda-sessions/page.tsx
import { AgendaDay } from '../components/agenda/AgendaDay';
import { AgendaDay as AgendaDayType } from '../components/agenda/types';

async function fetchAgendaDays(): Promise<AgendaDayType[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/agenda-days`, {
      cache: 'no-store',
    });
    if (!response.ok) {
      throw new Error('Failed to fetch agenda days');
    }
    const data: AgendaDayType[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching agenda days:', error);
    return [];
  }
}

export default async function AgendaSessionsPage() {
  const agendaDays = await fetchAgendaDays();

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 bg-gray-100 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-serif font-bold text-center mb-12 text-gray-800">
        Agenda Sessions
      </h1>

      {agendaDays.length === 0 ? (
        <p className="text-center text-gray-600 font-serif">
          No agenda days available.
        </p>
      ) : (
        <div className="max-w-4xl mx-auto space-y-8">
          {agendaDays.map((day) => (
            <AgendaDay key={day._id} day={day} />
          ))}
        </div>
      )}
    </div>
  );
}

export async function generateStaticParams() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/agenda-days`);
    if (!response.ok) {
      throw new Error('Failed to fetch agenda days');
    }
    const days: AgendaDayType[] = await response.json();
    return days.map((day) => ({
      id: day._id,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}