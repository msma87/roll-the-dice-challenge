
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Function to roll a dice with given sides
function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

// Route to handle dice roll requests
app.post('/roll', (req, res) => {
  const { sides } = req.body;

  // Validate allowed dice types
  if (![4, 6, 8, 10, 12, 20].includes(sides)) {
    return res.status(400).json({ error: 'Invalid dice' });
  }

  // Calculate result and return
  const result = rollDice(sides);
  res.json({ result });
});

app.listen(PORT, () => {
  console.log(`🎲 Server running on http://localhost:${PORT}`);
});
