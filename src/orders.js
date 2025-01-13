const express = require('express');
const db = require('../config/db');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Pobierz zamówienia użytkownika
router.get('/', authMiddleware, async (req, res) => {
  const [orders] = await db.execute('SELECT * FROM orders WHERE user_id = ?', [req.user.id]);
  res.json(orders);
});

// Dodaj zamówienie
router.post('/', authMiddleware, async (req, res) => {
  const { products } = req.body; // Tablica produktów z ilościami
  let total = 0;

  for (const product of products) {
    const [productData] = await db.execute('SELECT price FROM products WHERE id = ?', [product.id]);
    total += productData[0].price * product.quantity;
  }

  const [orderResult] = await db.execute(
    'INSERT INTO orders (user_id, total) VALUES (?, ?)', 
    [req.user.id, total]
  );

  for (const product of products) {
    await db.execute(
      'INSERT INTO order_details (order_id, product_id, quantity) VALUES (?, ?, ?)',
      [orderResult.insertId, product.id, product.quantity]
    );
  }

  res.status(201).json({ message: 'Zamówienie złożone' });
});

module.exports = router;
