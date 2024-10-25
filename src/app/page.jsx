import React from 'react';
import StockInsights from '../components/StockInsights';

export default function Home() {
  return (
    <div className="py-12">
      <header className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">
          Stock Insights Platform
        </h1>
        <p className="text-lg text-gray-600">
          Get AI-powered insights about stocks and market sentiment
        </p>
      </header>
      
      <StockInsights />
    </div>
  );
}
