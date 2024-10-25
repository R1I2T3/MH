import React from 'react';
import { render, screen } from '@testing-library/react';
import InsightCard from '@/components/InsightCard';

describe('InsightCard', () => {
  it('renders title and content correctly', () => {
    const props = {
      title: 'Test Title',
      content: 'Test Content',
      type: 'info'
    };

    render(<InsightCard {...props} />);

    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.content)).toBeInTheDocument();
  });

  it('applies correct styles based on type', () => {
    const props = {
      title: 'Test Title',
      content: 'Test Content',
      type: 'success'
    };

    const { container } = render(<InsightCard {...props} />);
    expect(container.firstChild).toHaveClass('border-green-200');
  });
});
