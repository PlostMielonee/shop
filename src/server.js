const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3001;

// Połączenie z bazą danych
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'szkolny_sklepik',
});

db.connect(err => {
  if (err) {
    console.error('Błąd połączenia z bazą danych:', err);
    process.exit(1);
  }
  console.log('Połączono z bazą danych MySQL');
});

app.use(express.json());

// Rejestracja
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.promise().query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword]);
    res.status(201).json({ message: 'Użytkownik zarejestrowany' });
  } catch (err) {
    res.status(400).json({ error: 'Nazwa użytkownika jest już zajęta' });
  }
});

// Logowanie
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const [users] = await db.promise().query('SELECT * FROM users WHERE username = ?', [username]);
    const user = users[0];

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Nieprawidłowe dane logowania' });
    }

    const token = jwt.sign({ id: user.id, role: user.role }, 'sekretny_klucz', { expiresIn: '1h' });
    res.json({ token, role: user.role });
  } catch (err) {
    res.status(500).json({ error: 'Błąd serwera' });
  }
});

// Pobierz produkty
app.get('/api/products', async (req, res) => {
  try {
    const [products] = await db.promise().query('SELECT * FROM products');
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Błąd podczas pobierania produktów' });
  }
});

app.listen(PORT, () => {
  console.log(`Serwer działa na http://localhost:${PORT}`);
});
