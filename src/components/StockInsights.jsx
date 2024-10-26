"use client";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import InsightCard from "./InsightCard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Activity, BarChart2, MessageCircle } from "lucide-react";
const StockInsights = () => {
  const [insights, setInsights] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    setLoading(true);
    try {
      const response = await fetch("/api/query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      const data = await response.json();
      console.log(data);

      setInsights(data);
    } catch (error) {
      console.error("Error fetching insights:", error);
      setInsights([
        {
          title: "Error",
          content: "Failed to fetch insights. Please try again.",
          type: "error",
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

      {insights && (
        <div className="w-full max-w-2xl space-y-4">
          {/* Financial Data Card */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-bold">
                <div className="flex items-center gap-2">
                  <Activity className="h-4 w-4" />
                  Financial Data
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-600">
              {insights?.financial_data?.Information}
            </CardContent>
          </Card>

          {/* Intent Card */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-bold">
                <div className="flex items-center gap-2">
                  <BarChart2 className="h-4 w-4" />
                  Intent Analysis
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Type:</span>
                  <span className="font-medium">{insights?.intent?.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Confidence:</span>
                  <span className="font-medium">
                    {(insights?.intent?.confidence * 100).toFixed(0)}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Company:</span>
                  <span className="font-medium">
                    {insights?.intent?.company}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sentiment Card */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-bold">
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  Sentiment Analysis
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Sentiment:</span>
                  <span className="font-medium capitalize">
                    {insights?.sentiment?.sentiment}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Confidence:</span>
                  <span className="font-medium">
                    {(insights?.sentiment?.confidence * 100).toFixed(0)}%
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default StockInsights;
