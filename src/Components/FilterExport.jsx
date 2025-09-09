import { saveAs } from "file-saver";

export default function FilterExport({
  filterCategory,
  setFilterCategory,
  filteredData,
}) {
  const exportCSV = () => {
    let csv =
      "Product,Brand,Category,MRP Present,Country of Origin,Net Quantity,Compliance Passed\n";
    filteredData.forEach((p) => {
      csv += `${p.Product},${p.Brand},${p.Category},${
        p["MRP Present"] ? "Yes" : "No"
      },${p["Country of Origin"] ? "Yes" : "No"},${
        p["Net Quantity"] ? "Yes" : "No"
      },${p["Compliance Passed"] ? "Yes" : "No"}\n`;
    });
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "product_compliance_report.csv");
  };

  return (
    <div className="flex flex-wrap justify-between mb-4 gap-4">
      <select
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="All">All Categories</option>
        {[...new Set(filteredData.map((p) => p.Category))].map((c, i) => (
          <option key={i} value={c}>
            {c}
          </option>
        ))}
      </select>
      <button
        onClick={exportCSV}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Export CSV
      </button>
    </div>
  );
}
