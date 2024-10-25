import React from 'react';

const Card = ({ children, className = '', ...props }) => (
  <div
    className={`rounded-lg border border-gray-200 bg-white shadow-sm ${className}`}
    {...props}
  >
    {children}
  </div>
);

const CardHeader = ({ children, className = '', ...props }) => (
  <div
    className={`flex flex-col space-y-1.5 p-6 ${className}`}
    {...props}
  >
    {children}
  </div>
);

const CardTitle = ({ children, className = '', ...props }) => (
  <h3
    className={`text-2xl font-semibold leading-none tracking-tight text-gray-900 ${className}`}
    {...props}
  >
    {children}
  </h3>
);

const CardContent = ({ children, className = '', ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
);

const CardFooter = ({ children, className = '', ...props }) => (
  <div
    className={`flex items-center p-6 pt-0 ${className}`}
    {...props}
  >
    {children}
  </div>
);

export { Card, CardHeader, CardTitle, CardContent, CardFooter };    