import React from 'react';

interface Bar {
  tools: string[];
  liquors: string[];
  ingredients: string[];
}

const MyBarShelf: React.FC<{ bar: Bar; onRemoveItem: (category: keyof Bar, item: string) => void }> = ({ bar, onRemoveItem }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg mb-6">
      <h2 className="text-2xl text-yellow-400 mb-4">Your Bar Shelf</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg text-gray-300">Tools</h3>
          <div className="flex flex-wrap gap-2">
            {bar.tools.map(item => (
              <span key={item} className="bg-blue-600 px-3 py-1 rounded-full text-sm flex items-center">
                {item}
                <button onClick={() => onRemoveItem('tools', item)} className="ml-2 text-red-400">x</button>
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg text-gray-300">Liquors</h3>
          <div className="flex flex-wrap gap-2">
            {bar.liquors.map(item => (
              <span key={item} className="bg-red-600 px-3 py-1 rounded-full text-sm flex items-center">
                {item}
                <button onClick={() => onRemoveItem('liquors', item)} className="ml-2 text-red-400">x</button>
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg text-gray-300">Ingredients</h3>
          <div className="flex flex-wrap gap-2">
            {bar.ingredients.map(item => (
              <span key={item} className="bg-green-600 px-3 py-1 rounded-full text-sm flex items-center">
                {item}
                <button onClick={() => onRemoveItem('ingredients', item)} className="ml-2 text-red-400">x</button>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBarShelf;