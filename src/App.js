import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ProductList from './components/ProductList';
import Login from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Main from './components/Main';


function App() {
  const [user, setUser] = useState(null); // Stan logowania

  return (
    <Router>
      <Routes>
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
