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
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function ComplianceChart({ complianceScore }) {
  const complianceScoreData = {
    labels: Array.from({ length: 10 }, (_, i) => `Day ${i + 1}`),
    datasets: [
      {
        label: "Compliance Score (%)",
        data: [82, 86, 87, 92, 96, 95, 95, 90, 93, complianceScore],
        borderColor: "#2563eb",
        backgroundColor: "rgba(37, 99, 235, 0.2)",
        fill: true,
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-8">
      <h2 className="font-semibold mb-4">Compliance Score Over Time</h2>
      <Line data={complianceScoreData} options={{ responsive: true }} />
    </div>
  );
}
