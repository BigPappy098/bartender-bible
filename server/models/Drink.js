const mongoose = require('mongoose');

const drinkSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: [{ type: String }],
  instructions: String,
  liquorType: String,
  category: String,
});

module.exports = mongoose.model('Drink', drinkSchema);