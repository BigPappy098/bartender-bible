import React from 'react';

interface Drink {
  name: string;
  ingredients: string[];
  instructions: string;
  liquorType: string;
  category: string;
}

const DrinkCard: React.FC<{ drink: Drink }> = ({ drink }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-yellow-400">{drink.name}</h3>
      <p className="text-sm text-gray-400">{drink.category} - {drink.liquorType}</p>
      <ul className="list-disc list-inside my-4 text-gray-200">
        {drink.ingredients.map((ing, idx) => <li key={idx}>{ing}</li>)}
      </ul>
      <p className="text-gray-300">{drink.instructions}</p>
    </div>
  );
};

export default DrinkCard;