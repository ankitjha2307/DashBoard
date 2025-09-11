import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 mt-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
        {/* Left side - Branding */}
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold text-gray-800">
            Audit<span className="text-blue-600">X</span>
          </span>
          <span>© {new Date().getFullYear()} Smart India Hackathon</span>
        </div>

        {/* Right side - Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#about" className="hover:text-blue-600 transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">
            Contact
          </a>
          <a href="#privacy" className="hover:text-blue-600 transition-colors">
            Privacy Policy
          </a>
          <a href="#terms" className="hover:text-blue-600 transition-colors">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
