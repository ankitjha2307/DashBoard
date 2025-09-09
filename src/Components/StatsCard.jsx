export default function StatsCard({ title, value, color, progress }) {
  return (
    <div className={`p-6 rounded-lg shadow ${color}`}>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-3xl font-bold mt-2">{value}</p>
      {progress && (
        <div className="w-full bg-gray-300 h-3 rounded mt-3">
          <div
            className="bg-blue-600 h-3 rounded"
            style={{ width: `${value}%` }}
          ></div>
        </div>
      )}
    </div>
  );
}
