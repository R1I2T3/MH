import React from "react";
import "./globals.css";
import { Toaster } from "../components/ui/sonner";
export const metadata = {
  title: "Stock Insights Platform",
  description: "Get AI-powered insights about stocks and market sentiment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <main className="container mx-auto px-4">
          {children}
          <Toaster />
        </main>
      </body>
    </html>
  );
}
