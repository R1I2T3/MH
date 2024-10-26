import React from "react";
import StockInsights from "../components/StockInsights";

export default function Home() {
  const companies = [
    "Reliance Industries",
    "Tata Consultancy Services",
    "HDFC Bank",
    "Alok Industries",
    "Bajaj Finance",
    "ICICI Bank",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
        <div className="text-2xl font-bold">
          <span className="text-black">Jagrit</span>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Premium Plans
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Community
          </a>
          <a href="#" className="text-red-500 hover:text-red-600">
            Sign up
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Login
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto mt-20 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">
            Ask <span className="text-red-500">Jagrit</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Get Stock Insights, master the world
          </p>
        </div>

        {/* Search Bar */}
        <StockInsights />

        {/* Company Suggestions */}
        <div className="mt-8">
          <p className="text-gray-600 mb-4">Get Insights On:</p>
          <div className="flex flex-wrap gap-2">
            {companies.map((company) => (
              <button
                key={company}
                className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
              >
                {company}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
