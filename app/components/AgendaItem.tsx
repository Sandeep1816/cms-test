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

interface AgendaItemProps {
  item: AgendaItem;
}

export default function AgendaItem({ item }: AgendaItemProps) {
  return (
    <div className="border rounded p-4 bg-white shadow">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">
              {item.startTime} - {item.endTime}
            </span>
          </div>
          <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
        </div>
        <div className="px-2 py-1 bg-blue-100 text-blue-800 rounded-md text-xs">
          {item.type}
        </div>
      </div>

      {item.description && (
        <p className="text-sm text-gray-600 mt-2">{item.description}</p>
      )}

      {item.speakers && item.speakers.length > 0 && (
        <div className="mt-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Speakers:</h4>
          <div className="space-y-2">
            {item.speakers.map((speaker) => (
              <div key={speaker._id} className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  {speaker.image ? (
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-gray-500 text-sm">
                      {speaker.name.charAt(0)}
                    </span>
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium">{speaker.name}</p>
                  {speaker.position && (
                    <p className="text-xs text-gray-500">{speaker.position}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 