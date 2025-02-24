const axios = require('axios');
const mongoose = require('mongoose');
const Drink = require('./models/Drink');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'));

const seedDrinks = async () => {
  try {
    const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let allDrinks = [];
    for (let letter of letters) {
      const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`);
      if (response.data.drinks) {
        const drinks = response.data.drinks.map(drink => ({
          name: drink.strDrink,
          ingredients: [
            drink.strIngredient1, drink.strIngredient2, drink.strIngredient3,
            drink.strIngredient4, drink.strIngredient5, drink.strIngredient6
          ].filter(Boolean),
          instructions: drink.strInstructions,
          liquorType: drink.strAlcoholic,
          category: drink.strCategory,
        }));
        allDrinks.push(...drinks);
      }
    }
    await Drink.insertMany(allDrinks);
    console.log(`${allDrinks.length} drinks seeded`);
  } catch (error) {
    console.error('Seeding error:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedDrinks();