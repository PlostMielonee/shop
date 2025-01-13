const express = require('express');
const db = require('../config/db');

const router = express.Router();

// Pobierz wszystkie produkty
router.get('/', async (req, res) => {
  const [products] = await db.execute('SELECT * FROM products');
  res.json(products);
});

// Dodaj produkt (dla administratora)
router.post('/', async (req, res) => {
  const { name, description, price, stock } = req.body;
  await db.execute('INSERT INTO products (name, description, price, stock) VALUES (?, ?, ?, ?)', 
    [name, description, price, stock]);
  res.status(201).json({ message: 'Produkt dodany' });
});

module.exports = router;
