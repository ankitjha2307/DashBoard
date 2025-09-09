import React from "react";
import { ShieldCheck } from "lucide-react"; // logo icon

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md px-8 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <ShieldCheck className="text-blue-600 w-8 h-8" />
        <span className="text-2xl font-extrabold text-gray-800 tracking-wide">
          Bharat<span className="text-blue-600">Check</span>
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex space-x-8 text-lg font-medium">
        {["Home", "About"].map((item, i) => (
          <a
            key={i}
            href={`#${item.toLowerCase()}`}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}
