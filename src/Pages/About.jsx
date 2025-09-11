import React from "react";

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-lg">
        {/* Title */}
        <h1 className="text-4xl font-extrabold mb-6 text-center">
          <span className="text-gray-800">Audit</span>
          <span className="text-blue-600">X</span>
        </h1>

        {/* Intro */}
        <p className="text-gray-700 text-lg leading-relaxed mb-8 text-center">
          <strong>AuditX</strong> is a compliance monitoring platform designed
          to help businesses and regulators ensure that products meet mandatory
          labeling and consumer safety requirements in India.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Our Mission
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our mission is to provide a transparent and user-friendly system for
            tracking compliance, helping brands build consumer trust and
            ensuring customers always receive safe and properly labeled
            products.
          </p>
        </section>

        {/* What We Offer */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            What We Offer
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Automated product compliance checks against mandatory labeling rules",
              "Dashboard with real-time compliance statistics and insights",
              "Category-wise filtering and exportable compliance reports",
              "Visual charts to track compliance trends over time",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Contact Us
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed space-y-2">
            📧 Email:{" "}
            <a
              href="mailto:support@AuditX.com"
              className="text-blue-600 underline"
            >
              support@bharatcheck.com
            </a>
            <br />
            📞 Helpline: +91 9310207180 <br />
            📍 Location: USAR, New Delhi, India
          </p>
        </section>
      </div>
    </div>
  );
}
