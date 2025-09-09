export default function StatsCard({
  title,
  value,
  color,
  progress,
  progressValue,
}) {
  return (
    <div className={`p-5 rounded-2xl shadow-lg ${color}`}>
      <h3 className="text-md font-medium mb-2">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
      {progress && (
        <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${progressValue}%` }}
          />
        </div>
      )}
    </div>
  );
}
