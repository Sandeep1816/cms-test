// app/components/agenda/AgendaSession.tsx
import { AgendaSession as AgendaSessionType } from './types';
import AgendaItem from './AgendaItem';

interface AgendaSessionProps {
  session: AgendaSessionType;
}

export function AgendaSession({ session }: AgendaSessionProps) {
  return (
    <div
      className="p-6 bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
      style={session.color ? { borderLeft: `4px solid ${session.color}` } : {}}
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-serif font-semibold text-gray-900">{session.title}</h3>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600 font-serif">
            {session.startTime} - {session.endTime}
          </span>
          {session.venue && (
            <span className="text-sm text-gray-600 italic">{session.venue}</span>
          )}
        </div>
      </div>

      {session.items.length === 0 ? (
        <div className="text-center text-gray-600 font-serif py-4">
          No items scheduled for this session.
        </div>
      ) : (
        <div className="space-y-4">
          {session.items.map((item) => (
            <AgendaItem key={item._id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}