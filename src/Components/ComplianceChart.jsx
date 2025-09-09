import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function ComplianceChart({ complianceFraction }) {
  const complianceScoreData = {
    labels: Array.from({ length: 10 }, (_, i) => `Day ${i + 1}`),
    datasets: [
      {
        label: "Compliance Score (%)",
        data: [83, 70, 96, 92, 78, 88, 76, 85, 87, complianceFraction * 100],
        borderColor: "#2563eb",
        backgroundColor: "rgba(37, 99, 235, 0.2)",
        fill: true,
        tension: 0.4,
        pointBackgroundColor: "#2563eb",
        pointHoverRadius: 6,
        borderWidth: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: { font: { size: 14 }, color: "#1e293b" },
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.parsed.y.toFixed(0)}%`,
        },
      },
      title: { display: false },
    },
    scales: {
      y: {
        min: 0,
        max: 100,
        ticks: {
          callback: (v) => `${v}%`,
          color: "#1e293b",
          font: { size: 12 },
        },
        grid: { color: "#e5e7eb" },
      },
      x: {
        ticks: { color: "#1e293b", font: { size: 12 } },
        grid: { color: "#f3f4f6" },
      },
    },
    animation: { duration: 1000, easing: "easeOutQuart" },
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Compliance Score Over Time
      </h2>
      <Line data={complianceScoreData} options={options} />
    </div>
  );
}
