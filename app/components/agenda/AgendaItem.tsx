// app/components/agenda/AgendaItem.tsx
import Image from 'next/image';

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
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 font-serif">
              {item.startTime} - {item.endTime}
            </span>
          </div>
          <h3 className="text-xl font-serif font-semibold text-gray-900 mt-1">{item.title}</h3>
        </div>
        <div className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-md text-xs font-medium">
          {item.type}
        </div>
      </div>

      {item.description && (
        <p className="text-sm text-gray-700 mt-3 leading-relaxed">{item.description}</p>
      )}

      {item.speakers && item.speakers.length > 0 && (
        <div className="mt-5">
          <h4 className="text-sm font-serif font-medium text-gray-800 mb-3">Speakers:</h4>
          <div className="space-y-3">
            {item.speakers.map((speaker) => (
              <div key={speaker._id} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  {speaker.image ? (
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-gray-600 text-sm font-medium">
                      {speaker.name.charAt(0)}
                    </span>
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{speaker.name}</p>
                  {speaker.position && (
                    <p className="text-xs text-gray-600 italic">{speaker.position}</p>
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