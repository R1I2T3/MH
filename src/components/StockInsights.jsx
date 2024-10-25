"use client";
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import InsightCard from './InsightCard';

const StockInsights = () => {
  const [insights, setInsights] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    setLoading(true);
    try {
      const response = await fetch('/api/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });
      
      const data = await response.json();
      // Ensure data is an array before setting insights
      setInsights(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error fetching insights:', error);
      setInsights([
        {
          title: 'Error',
          content: 'Failed to fetch insights. Please try again.',
          type: 'error',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-8 p-6">
      <SearchBar onSearch={handleSearch} />
      
      {loading && (
        <div className="flex items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
        </div>
      )}
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {insights.map((insight, index) => (
          <InsightCard
            key={index}
            title={insight.title}
            content={insight.content}
            type={insight.type}
          />
        ))}
      </div>
    </div>
  );
};

export default StockInsights;
