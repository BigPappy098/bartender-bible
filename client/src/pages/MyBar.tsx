// src/pages/MyBar.tsx
import React, { useState } from 'react';
import { Category } from '../types'; // Import the shared Category type
import ItemSelector from '../components/ItemSelector';
import MyBarShelf from '../components/MyBarShelf';
import AIBartender from '../components/AIBartender';

interface Bar {
  tools: string[];
  liquors: string[];
  ingredients: string[];
}

const MyBar: React.FC = () => {
  const [bar, setBar] = useState<Bar>({
    tools: [],
    liquors: [],
    ingredients: [],
  });

  const addItem = (category: Category, item: string) => {
    if (!bar[category].includes(item)) {
      setBar(prev => ({
        ...prev,
        [category]: [...prev[category], item],
      }));
    }
  };

  const removeItem = (category: Category, item: string) => {
    setBar(prev => ({
      ...prev,
      [category]: prev[category].filter(i => i !== item),
    }));
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-yellow-400 mb-6">MyBar</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-1">
          <ItemSelector onAddItem={addItem} />
        </div>
        <div className="col-span-2">
          <MyBarShelf bar={bar} onRemoveItem={removeItem} />
          <AIBartender bar={bar} />
        </div>
      </div>
    </div>
  );
};

export default MyBar;