import { AgendaDay as AgendaDayType } from './types';
import { AgendaSession } from './AgendaSession';

interface AgendaDayProps {
  day: AgendaDayType;
}

export function AgendaDay({ day }: AgendaDayProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        {day.name} - {new Date(day.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric'
        })}
      </h2>
      
      <div className="bg-white shadow rounded-lg overflow-hidden">
        {day.sessions.length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            No sessions scheduled for this day.
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {day.sessions.map((session) => (
              <AgendaSession key={session._id} session={session} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 