import React from "react";
import { ShieldCheck } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  // Only include About and Dashboard if needed
  const navItems = [
    { name: "About", path: "/about" },
    { name: "Dashboard", path: "/dashboard" }, // remove if you don't want this too
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md px-8 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <ShieldCheck className="text-blue-600 w-8 h-8" />
        <span className="text-2xl font-extrabold text-gray-800 tracking-wide">
          Audit<span className="text-blue-600">X</span>
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex space-x-8 text-lg font-medium">
        {navItems.map((item, i) => (
          <Link
            key={i}
            to={item.path}
            className={`transition-colors ${
              location.pathname === item.path
                ? "text-blue-600 font-bold"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
