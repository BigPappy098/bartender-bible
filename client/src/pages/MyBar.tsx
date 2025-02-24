import React, { useState } from 'react';
import MyBarShelf from '../components/MyBarShelf';
import ItemSelector from '../components/ItemSelector';
import AIBartender from '../components/AIBartender';

const MyBar: React.FC = () => {
  const [bar, setBar] = useState({
    tools: [] as string[],
    liquors: [] as string[],
    ingredients: [] as string[],
  });

  const addItem = (category: keyof typeof bar, item: string) => {
    if (!bar[category].includes(item)) {
      setBar(prev => ({
        ...prev,
        [category]: [...prev[category], item],
      }));
    }
  };

  const removeItem = (category: keyof typeof bar, item: string) => {
    setBar(prev => ({
      ...prev,
      [category]: prev[category].filter(i => i !== item),
    }));
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-yellow-400 mb-6">My Bar</h1>
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