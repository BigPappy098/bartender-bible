const axios = require('axios');
require('dotenv').config();

const suggestDrink = async (bar, preferences) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        model: 'text-davinci-003', // OpenAI model
        prompt: `Suggest a detailed cocktail recipe using these ingredients: ${bar.ingredients.join(', ')}, liquors: ${bar.liquors.join(', ')}, and tools: ${bar.tools.join(', ')}. Preferences: ${preferences}. Include the name, ingredients, and instructions.`,
        max_tokens: 200, // Limit response length
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.AI_API_KEY}`, // OpenAI API key
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data.choices[0].text.trim(); // Extract suggestion from OpenAI response
  } catch (error) {
    console.error('OpenAI API Error:', error.message);
    return 'Couldn’t generate a suggestion. Please try again later.';
  }
};

module.exports = { suggestDrink };