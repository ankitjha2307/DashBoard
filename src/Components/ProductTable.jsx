import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";

export default function ProductTable({ filteredData }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-semibold mb-4 text-lg">Product Compliance Table</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse text-sm">
          <thead className="bg-blue-600 text-white">
            <tr>
              {[
                "Product",
                "Brand",
                "Category",
                "Manufacturer / Importer Details",
                "Commodity Name",
                "Net Quantity",
                "MRP (Inclusive of all taxes)",
                "Consumer Care Details",
                "Date of Manufacture / Packing",
                "Country of Origin",
                "Compliance Passed",
              ].map((h, i) => (
                <th key={i} className="p-2 text-center border">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, idx) => {
              const fields = [
                "Manufacturer / Importer Details",
                "Commodity Name",
                "Net Quantity",
                "MRP (Inclusive of all taxes)",
                "Consumer Care Details",
                "Date of Manufacture / Packing",
                "Country of Origin",
              ];

              const isCompliant = fields.every((f) => row[f] && row[f] !== "");

              return (
                <tr key={idx} className={idx % 2 === 0 ? "bg-gray-100" : ""}>
                  {/* Product, Brand, Category shown as text */}
                  <td className="p-2 text-center font-medium">{row.Product}</td>
                  <td className="p-2 text-center">{row.Brand}</td>
                  <td className="p-2 text-center">{row.Category}</td>

                  {/* Compliance fields shown as ✅/❌ */}
                  {fields.map((f, i) => (
                    <td key={i} className="p-2 text-center">
                      {row[f] ? (
                        <CheckCircleIcon className="w-6 h-6 text-green-600 mx-auto" />
                      ) : (
                        <XCircleIcon className="w-6 h-6 text-red-600 mx-auto" />
                      )}
                    </td>
                  ))}

                  {/* Final compliance check */}
                  <td className="p-2 text-center">
                    {isCompliant ? (
                      <CheckCircleIcon className="w-6 h-6 text-green-600 mx-auto" />
                    ) : (
                      <XCircleIcon className="w-6 h-6 text-red-600 mx-auto" />
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
