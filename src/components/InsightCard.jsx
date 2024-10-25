import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

const InsightCard = ({ title, content, type = 'info' }) => {
  const typeStyles = {
    info: 'border-blue-200',
    success: 'border-green-200',
    warning: 'border-yellow-200',
    error: 'border-red-200'
  };

  return (
    <Card className={`${typeStyles[type]} w-full max-w-md`}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {typeof content === 'string' ? (
          <p className="text-gray-600">{content}</p>
        ) : (
          content
        )}
      </CardContent>
    </Card>
  );
};

export default InsightCard;