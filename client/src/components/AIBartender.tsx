import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Bar {
  tools: string[];
  liquors: string[];
  ingredients: string[];
}

const AIBartender: React.FC<{ bar: Bar }> = ({ bar }) => {
  const [suggestion, setSuggestion] = useState<string>('');
  const [preferences, setPreferences] = useState('something refreshing');

  useEffect(() => {
    if (bar.ingredients.length > 0 || bar.liquors.length > 0) {
      fetchSuggestion();
    }
  }, [bar]);

  const fetchSuggestion = async () => {
    try {
      const res = await axios.post('http://localhost:5000/ai/suggest', { bar, preferences });
      setSuggestion(res.data.suggestion);
    } catch (error) {
      setSuggestion('Error fetching suggestion.');
    }
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h2 className="text-xl text-yellow-400 mb-2">AI Bartender</h2>
      <input
        type="text"
        value={preferences}
        onChange={(e) => setPreferences(e.target.value)}
        placeholder="E.g., 'something refreshing'"
        className="w-full bg-gray-900 text-white p-2 rounded mb-4"
      />
      <button
        onClick={fetchSuggestion}
        className="bg-yellow-500 text-white p-2 rounded mb-4"
      >
        Get Suggestion
      </button>
      <p className="text-gray-200 whitespace-pre-wrap">{suggestion || 'Stock your bar to get a suggestion!'}</p>
    </div>
  );
};

export default AIBartender;