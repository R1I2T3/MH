import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Stock Insights Platform',
  description: 'Get AI-powered insights about stocks and market sentiment',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <main className="container mx-auto px-4">
          {children}
        </main>
      </body>
    </html>
  );
}