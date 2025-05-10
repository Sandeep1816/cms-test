import AgendaSession from './AgendaSession';

interface Speaker {
  _id: string;
  name: string;
  position?: string;
  image?: string;
}

interface AgendaItem {
  _id: string;
  title: string;
  description?: string;
  startTime: string;
  endTime: string;
  type: string;
  speakers: Speaker[];
}

interface AgendaSession {
  _id: string;
  title: string;
  startTime: string;
  endTime: string;
  venue?: string;
  color?: string;
  items: AgendaItem[];
}

interface AgendaDay {
  _id: string;
  name: string;
  date: string;
  dayNumber: number;
  sessions: AgendaSession[];
}

interface AgendaDayProps {
  day: AgendaDay;
}

export default function AgendaDay({ day }: AgendaDayProps) {
  const formattedDate = new Date(day.date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">{day.name}</h2>
          <p className="text-gray-500">{formattedDate}</p>
        </div>
      </div>

      {!day.sessions || day.sessions.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64 border border-dashed rounded-lg p-8">
          <p className="text-gray-500">No sessions scheduled for this day</p>
        </div>
      ) : (
        <div className="space-y-8">
          {day.sessions.map((session) => (
            <AgendaSession key={session._id} session={session} />
          ))}
        </div>
      )}
    </div>
  );
} 