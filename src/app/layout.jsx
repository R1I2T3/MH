// src/app/layout.jsx
import './globals.css';

export const metadata = {
  title: 'Stock Insights Platform',
  description: 'Get insights and analysis on stock market data',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        {/* Add any meta tags or links here */}
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
