import AgendaItem from './AgendaItem';

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

interface AgendaSessionProps {
  session: AgendaSession;
}

export default function AgendaSession({ session }: AgendaSessionProps) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: session.color || "#0047AB" }}
          />
          <h2 className="text-xl font-semibold">{session.title}</h2>
          <span className="text-sm text-gray-500">
            {session.startTime} - {session.endTime}
          </span>
        </div>
        {session.venue && (
          <span className="text-sm text-gray-500">Venue: {session.venue}</span>
        )}
      </div>

      {!session.items || session.items.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-32 border border-dashed rounded-lg p-4">
          <p className="text-gray-500">No items in this session</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {session.items.map((item) => (
            <AgendaItem key={item._id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
} 