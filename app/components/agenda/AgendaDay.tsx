// app/components/agenda/AgendaDay.tsx
import { AgendaDay as AgendaDayType } from './types';
import { AgendaSession } from './AgendaSession';

interface AgendaDayProps {
  day: AgendaDayType;
}

export function AgendaDay({ day }: AgendaDayProps) {
  return (
    <div className="mb-8">
      <div className="bg-gray-100 rounded-lg p-6 shadow-md border border-gray-200">
        <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">
          {day.name} - {day.date} (Day {day.dayNumber})
        </h2>
        {day.sessions.length === 0 ? (
          <div className="text-center text-gray-600 font-serif py-4">
            No sessions scheduled for this day.
          </div>
        ) : (
          <div className="space-y-6">
            {day.sessions.map((session) => (
              <AgendaSession key={session._id} session={session} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}