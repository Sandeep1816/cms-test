import { AgendaItem as AgendaItemType } from './types';

interface AgendaItemProps {
  item: AgendaItemType;
}

export function AgendaItem({ item }: AgendaItemProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
      <div className="flex items-start justify-between">
        <div>
          <h4 className="text-base font-medium text-gray-900">{item.title}</h4>
          {item.description && (
            <p className="mt-1 text-sm text-gray-600">{item.description}</p>
          )}
          <div className="mt-2 flex items-center space-x-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {item.type}
            </span>
            <span className="text-sm text-gray-500">
              {item.startTime} - {item.endTime}
            </span>
          </div>
        </div>
      </div>

      {item.speakers.length > 0 && (
        <div className="mt-4">
          <h5 className="text-sm font-medium text-gray-700 mb-2">Speakers:</h5>
          <div className="flex flex-wrap gap-2">
            {item.speakers.map((speaker) => (
              <div
                key={speaker._id}
                className="flex items-center space-x-2 bg-gray-100 rounded-full px-3 py-1"
              >
                {speaker.image && (
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-6 h-6 rounded-full"
                  />
                )}
                <span className="text-sm text-gray-700">{speaker.name}</span>
                {speaker.position && (
                  <span className="text-xs text-gray-500">({speaker.position})</span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 