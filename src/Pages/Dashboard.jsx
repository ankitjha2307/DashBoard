import { useState } from "react";
import StatsCard from "../components/StatsCard";
import ComplianceChart from "../components/ComplianceChart";
import FilterExport from "../components/FilterExport";
import ProductTable from "../components/ProductTable";
import productData from "../data/productData";

export default function Dashboard() {
  const [filterCategory, setFilterCategory] = useState("All");

  const filteredData =
    filterCategory === "All"
      ? productData
      : productData.filter((p) => p.Category === filterCategory);

  const complianceScore = Math.round(
    (productData.filter((p) => p["Compliance Passed"]).length /
      productData.length) *
      100
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        Compliance Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <StatsCard
          title="Total Products Checked"
          value={productData.length}
          color="bg-blue-200"
        />
        <StatsCard
          title="Compliant Products"
          value={productData.filter((p) => p["Compliance Passed"]).length}
          color="bg-green-200"
        />
        <StatsCard
          title="Compliance Score (%)"
          value={complianceScore}
          color="bg-yellow-200"
          progress
        />
      </div>

      <ComplianceChart complianceScore={complianceScore} />

      <FilterExport
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
        filteredData={filteredData}
      />

      <ProductTable filteredData={filteredData} />
    </div>
  );
}
