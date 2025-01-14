import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Używaj tylko Routes zamiast Route z Route wewnątrz
import ProductList from './components/ProductList';
import Login from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import ParticlesComponent from './components/particles';
import './css/loginStyles.css';
import './css/particles.css';



function App() {
  const [user, setUser] = useState(null); // czy użytkownik jest zalogowany [stan akutalny]

  return (
    <Router>
    <div>
       
        <ParticlesComponent id='particles'/>

        {/* Główna zawartość */}


        <div className="main-app-content">
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route
              path="/main"
              element={user ? <ProductList user={user} /> : <Navigate to="/login" />}
            />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/register" element={<RegisterForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
