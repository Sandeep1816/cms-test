interface ErrorStateProps {
  message: string;
}

export default function ErrorState({ message }: ErrorStateProps) {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
        <p>Error: {message}</p>
      </div>
    </div>
  );
} 