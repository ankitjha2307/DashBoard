import { useState } from "react";
import StatsCard from "../Components/StatsCard";
import ProductTable from "../Components/ProductTable";
import ComplianceChart from "../Components/ComplianceChart";
import FilterExport from "../Components/FilterExport";
import productData from "../Data/productData";

export default function Dashboard() {
  const [filterCategory, setFilterCategory] = useState("All");

  const fields = [
    "Manufacturer / Importer Details",
    "Commodity Name",
    "Net Quantity",
    "MRP (Inclusive of all taxes)",
    "Consumer Care Details",
    "Date of Manufacture / Packing",
    "Country of Origin",
  ];

  const filteredData =
    filterCategory === "All"
      ? productData
      : productData.filter((p) => p.Category === filterCategory);

  const totalProducts = productData.length;
  const compliantProducts = productData.filter((p) =>
    fields.every((f) => p[f])
  ).length;

  const complianceFraction = totalProducts
    ? compliantProducts / totalProducts
    : 0;
  const complianceScore = Math.round(complianceFraction * 100);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <h1 className="text-4xl font-extrabold text-blue-600 mb-8 text-center md:text-left">
        Compliance Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <StatsCard
          title="Total Products Checked"
          value={totalProducts}
          color="bg-gradient-to-r from-blue-400 to-blue-200 text-white"
        />
        <StatsCard
          title="Compliant Products"
          value={compliantProducts}
          color="bg-gradient-to-r from-green-400 to-green-200 text-white"
        />
        <StatsCard
          title="Compliance Score"
          value={complianceScore + "%"}
          progress
          progressValue={complianceScore}
          color="bg-gradient-to-r from-yellow-400 to-yellow-200 text-white"
        />
      </div>

      {/* Compliance Trend Chart */}
      <ComplianceChart complianceFraction={complianceFraction} />

      {/* Filter & Table */}
      <div className="bg-white p-6 rounded-2xl shadow-lg mt-10">
        <FilterExport
          filterCategory={filterCategory}
          setFilterCategory={setFilterCategory}
          filteredData={filteredData}
        />
        <div className="mt-6 overflow-x-auto">
          <ProductTable filteredData={filteredData} />
        </div>
      </div>
    </div>
  );
}
