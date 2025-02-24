import React, { useState, useEffect } from 'react';
import DrinkCard from '../components/DrinkCard';
import SearchBar from '../components/SearchBar';

interface Drink {
  _id: string;
  name: string;
  ingredients: string[];
  instructions: string;
  liquorType: string;
  category: string;
}

const Home: React.FC = () => {
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [filteredDrinks, setFilteredDrinks] = useState<Drink[]>([]);

  useEffect(() => {
    fetchDrinks();
  }, []);

  const fetchDrinks = async (query = '', ingredient = '') => {
    const url = `http://localhost:5000/drinks?query=${query}&ingredient=${ingredient}`;
    const res = await fetch(url);
    const data = await res.json();
    setDrinks(data);
    setFilteredDrinks(data);
  };

  const handleSearch = (query: string, ingredient: string) => {
    fetchDrinks(query, ingredient);
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-yellow-400 mb-6">Drink Bible</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {filteredDrinks.map(drink => (
          <DrinkCard key={drink._id} drink={drink} />
        ))}
      </div>
    </div>
  );
};

export default Home;