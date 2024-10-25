"use client"
import SearchBar from "./SearchBar";
import InsightCard from "./InsightCard";
import { useState } from "react";
import axios from "axios";

export default function StockInsights() {
  const [insights, setInsights] = useState([]);

  const fetchInsights = async (query) => {
    try {
      const response = await axios.post("/api/query", { query });
      setInsights(response.data.insights);
    } catch (error) {
      console.error("Error fetching insights:", error);
    }
  };

  return (
    <div>
      <SearchBar onSearch={fetchInsights} />
      <div className="mt-4">
        {insights.map((insight, index) => (
          <InsightCard key={index} title={insight.title} content={insight.content} />
        ))}
      </div>
    </div>
  );
}
