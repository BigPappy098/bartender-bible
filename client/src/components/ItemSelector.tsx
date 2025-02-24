// src/components/ItemSelector.tsx
import React, { useState } from 'react';
import { Category } from '../types'; // Import the shared Category type

interface ItemSelectorProps {
  onAddItem: (category: Category, item: string) => void; // Use Category type
}

const ItemSelector: React.FC<ItemSelectorProps> = ({ onAddItem }) => {
  const [category, setCategory] = useState<Category>("tools"); // Use Category type for state
  const [item, setItem] = useState("");

  const handleAdd = () => {
    if (item.trim()) {
      onAddItem(category, item); // Pass category as Category type
      setItem(""); // Clear input after adding
    }
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h2 className="text-xl text-yellow-400 mb-4">Stock Your Bar</h2>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value as Category)} // Cast to Category
        className="w-full bg-gray-900 p-2 rounded mb-4 text-white"
      >
        <option value="tools">Tools</option>
        <option value="liquors">Liquors</option>
        <option value="ingredients">Ingredients</option>
      </select>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Enter item name"
        className="w-full bg-gray-900 text-white p-2 rounded mb-4"
      />
      <button
        onClick={handleAdd}
        className="bg-yellow-500 text-white p-2 rounded"
      >
        Add Item
      </button>
    </div>
  );
};

export default ItemSelector;