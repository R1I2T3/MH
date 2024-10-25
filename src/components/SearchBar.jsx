import React, { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-2xl gap-2">
      <Input
        type="text"
        placeholder="Ask about any stock (e.g., 'What's the sentiment for AAPL?')"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1"
      />
      <Button type="submit">
        Search
      </Button>
    </form>
  );
};

export default SearchBar;