import { AgendaSession as AgendaSessionType } from './types';
import { AgendaItem } from './AgendaItem';

interface AgendaSessionProps {
  session: AgendaSessionType;
}

export function AgendaSession({ session }: AgendaSessionProps) {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-900">{session.title}</h3>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-500">
            {session.startTime} - {session.endTime}
          </span>
          {session.venue && (
            <span className="text-sm text-gray-500">{session.venue}</span>
          )}
        </div>
      </div>

      {session.items.length === 0 ? (
        <div className="text-center text-gray-500 py-4">
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