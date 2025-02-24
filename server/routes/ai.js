const express = require('express');
const router = express.Router();
const { suggestDrink } = require('../services/aiService');

router.post('/suggest', async (req, res) => {
  const { bar, preferences } = req.body;
  const suggestion = await suggestDrink(bar, preferences || 'something refreshing');
  res.json({ suggestion });
});

module.exports = router;