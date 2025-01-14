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

    if (e.target.value == 0) {
      console.log("Wysłana wartość jest pusta");
      alert("Nic nie wpisano");
    } else {
      console.log("Wysłano poprawną wartość");
    }
    if (response.ok) {
      alert("Zarejestrowano pomyślnie!");
    } else {
      alert("Błąd rejestracji");
    }
  };

  return (
    <div className="main position-relative">

    <div className="register-form">
      <h2 className="register-title">ZAREJESTRUJ SIĘ </h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input from-label"
          type="text"
          placeholder="Nazwa użytkownika"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          />

        <input
          className="input from-label"
          type="password"
          placeholder="Hasło"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          />
        <button className="submit-button" type="submit">
          Rejestruj
        </button>
        <Link to="/login">
          <button className="submit-button" type="button">
            Zaloguj się do portalu
          </button>
        </Link>
      </form>
      <p>Masz już konto? To sie zaloguj!</p>
    </div>
          </div>
  );
}

export default RegisterForm;
