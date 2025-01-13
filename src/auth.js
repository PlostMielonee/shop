const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/db');

const router = express.Router();

// Rejestracja
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const [result] = await db.execute(
      'INSERT INTO users (username, password) VALUES (?, ?)',
      [username, hashedPassword]
    );
    res.status(201).json({ message: 'Użytkownik zarejestrowany' });
  } catch (error) {
    res.status(400).json({ error: 'Nazwa użytkownika jest zajęta' });
  }
});

// Logowanie
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const [users] = await db.execute('SELECT * FROM users WHERE username = ?', [username]);
  const user = users[0];
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: 'Nieprawidłowe dane logowania' });
  }

  const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
  res.json({ token, role: user.role });
});

module.exports = router;
