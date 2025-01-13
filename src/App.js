import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Używaj tylko Routes zamiast Route z Route wewnątrz
import ProductList from './components/ProductList';
import Login from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [user, setUser] = useState(null); // czy użytkownik jest zalogowany [stan akutalny]

  return (
    <Router>
      <Routes>
        {/* Przekierowanie do logowania, jeśli użytkownik nie jest zalogowany */}
        <Route path="/" element={<Navigate to="/login" />} />  {/* Domyślna strona logowania */}

        {/* Ścieżka do strony głównej */}
        <Route
          path="/main"
          element={user ? <ProductList user={user} /> : <Navigate to="/login" />}
        />
        
        {/* Strona logowania */}
        <Route path="/login" element={<Login setUser={setUser} />} />
        
        {/* Strona rejestracji */}
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </Router>
  );
}

export default App;
