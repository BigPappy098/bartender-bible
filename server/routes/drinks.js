const express = require('express');
const router = express.Router();
const Drink = require('../models/Drink');

router.get('/', async (req, res) => {
  try {
    const { query, ingredient } = req.query;
    let filter = {};
    if (query) {
      filter.name = { $regex: query, $options: 'i' };
    }
    if (ingredient) {
      filter.ingredients = { $in: [new RegExp(ingredient, 'i')] };
    }
    const drinks = await Drink.find(filter);
    res.json(drinks);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;