import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import navbar from "./navbar";
  

const LoginForm = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3001/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (data.token) {
      setUser({ username, token: data.token });
      navigate("/main"); // Przekierowanie na stronę główną po zalogowaniu
    } else {
      alert("Nieprawidłowe dane logowania");
    }
  };

  return (
    <div className="login-form">
      <h2 className="login-title"> ZALOGUJ SIE</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input form-label"
          type="text"
          placeholder="Nazwa użytkownika"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          className="input form-label"
          type="password"
          placeholder="Hasło"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="submit-button" type="submit">
          Zaloguj
        </button>
      </form>
      <p>
        Nie masz konta? <Link to="/register">Zarejestruj się</Link>
      </p>
    </div>
  );
};

export default LoginForm;
