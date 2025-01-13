import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ProductList from './components/ProductList';
import Login from './components/LoginForm';

function App() {
  const [user, setUser] = useState(null); // State to track logged-in user

  return (
    <Router>
      <Routes>
        {/* Protected Route: Redirect to /login if user is not authenticated */}
        <Route 
          path="/" 
          element={user ? <ProductList user={user} /> : <Navigate to="/login" />} 
        />
        {/* Login Page */}
        <Route path="/login" element={<Login setUser={setUser} />} />
      </Routes>
    </Router>
  );
}

export default App;
