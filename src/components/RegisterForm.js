import React, { useState } from "react";
import { Link } from "react-router-dom";

console.log("połączono z register form");

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3001/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    if (response.ok) {
      alert("Zarejestrowano pomyślnie!");
    } else {
      alert("Błąd rejestracji");
    }
  };

  return (
    <div className="register-form">
      <h2 className="register-title">ZAREJESTRUJ SIĘ </h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input from-label"
          type="text"
          placeholder="Nazwa użytkownika"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="input from-label"
          type="password"
          placeholder="Hasło"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="submit-button" type="submit">
          Zarejestruj
        </button>

      </form>
        <p>
          Masz już konto? <Link to="/login">To sie zaloguj!!</Link>!
        </p>
    </div>
  );
}

export default RegisterForm;
