const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 5000;

// Użyj CORS, aby umożliwić komunikację między frontendem a backendem na różnych portach
app.use(cors());

// Połączenie z bazą danych MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'szkolny_sklepik',
});

db.connect(err => {
  if (err) {
    console.error('Błąd połączenia z bazą danych:', err);
  } else {
    console.log('Połączono z bazą danych');
  }
});

// Strona główna
app.get('/', (req, res) => {
  res.send('Witaj w mojej aplikacji!');
});

// Endpoint do pobierania produktów
app.get('/api/products', (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Błąd podczas pobierania danych', error: err });
    }
    res.json(results);
  });
});

// Uruchomienie serwera
app.listen(port, () => {
  console.log(`Serwer działa na http://localhost:${port}`);
});
