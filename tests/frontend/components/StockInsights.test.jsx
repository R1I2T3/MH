import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import StockInsights from '@/components/StockInsights';

global.fetch = jest.fn();

describe('StockInsights', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it('renders search bar', () => {
    render(<StockInsights />);
    expect(screen.getByPlaceholderText(/ask about any stock/i)).toBeInTheDocument();
  });

  it('handles search correctly', async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve([
          {
            title: 'Test Insight',
            content: 'Test Content',
            type: 'info'
          }
        ])
      })
    );

    render(<StockInsights />);

    const input = screen.getByPlaceholderText(/ask about any stock/i);
    const button = screen.getByText(/search/i);

    fireEvent.change(input, { target: { value: 'AAPL sentiment' } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('Test Insight')).toBeInTheDocument();
    });
  });
});