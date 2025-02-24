import React, { useState } from 'react';

const tools = ['Shaker', 'Muddler', 'Jigger', 'Strainer', 'Spoon'];
const liquors = ['Vodka', 'Gin', 'Rum', 'Tequila', 'Whiskey', 'Bourbon'];
const ingredients = ['Lime', 'Sugar', 'Bitters', 'Tonic', 'Soda', 'Mint', 'Lemon'];

const ItemSelector: React.FC<{ onAddItem: (category: string, item: string) => void }> = ({ onAddItem }) => {
  const [category, setCategory] = useState('tools');

  const items = {
    tools,
    liquors,
    ingredients,
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h2 className="text-xl text-yellow-400 mb-4">Stock Your Bar</h2>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full bg-gray-900 p-2 rounded mb-4 text-white"
      >
        <option value="tools">Tools</option>
        <option value="liquors">Liquors</option>
        <option value="ingredients">Ingredients</option>
      </select>
      <div className="grid grid-cols-2 gap-2">
        {items[category as keyof typeof items].map(item => (
          <button
            key={item}
            onClick={() => onAddItem(category, item)}
            className="bg-gray-700 hover:bg-yellow-500 text-white p-2 rounded"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ItemSelector;