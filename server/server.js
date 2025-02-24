const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const drinkRouter = require('./routes/drinks');
const aiRouter = require('./routes/ai');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/drinks', drinkRouter);
app.use('/ai', aiRouter);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Bartender Bible API');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});