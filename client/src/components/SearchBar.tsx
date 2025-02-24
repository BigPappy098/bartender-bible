import React, { useState } from 'react';

const SearchBar: React.FC<{ onSearch: (query: string, ingredient: string) => void }> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [ingredient, setIngredient] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query, ingredient);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 mb-6">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by name..."
        className="bg-gray-800 text-white p-2 rounded-lg w-full md:w-1/3"
      />
      <input
        type="text"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
        placeholder="Filter by ingredient..."
        className="bg-gray-800 text-white p-2 rounded-lg w-full md:w-1/3"
      />
      <button type="submit" className="bg-yellow-500 text-white p-2 rounded-lg">Search</button>
    </form>
  );
};

export default SearchBar;