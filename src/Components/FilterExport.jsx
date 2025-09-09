export default function FilterExport({
  filterCategory,
  setFilterCategory,
  filteredData,
}) {
  const categories = ["All", ...new Set(filteredData.map((p) => p.Category))];

  const exportToCSV = () => {
    if (!filteredData || filteredData.length === 0) return;

    const headers = Object.keys(filteredData[0]);

    const csvRows = [
      headers.join(","),
      ...filteredData.map((row) =>
        headers.map((field) => `"${row[field]}"`).join(",")
      ),
    ];

    const csvString = csvRows.join("\n");

    const blob = new Blob([csvString], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "compliance_data.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-6 flex justify-between items-center">
      <select
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
        className="p-2 border rounded"
      >
        {categories.map((c, idx) => (
          <option key={idx} value={c}>
            {c}
          </option>
        ))}
      </select>

      <button
        onClick={exportToCSV}
        className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition"
      >
        Export CSV
      </button>
    </div>
  );
}
