import React, { useState } from 'react';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    if (response.ok) {
      alert('Zarejestrowano pomyślnie!');
    } else {
      alert('Błąd rejestracji');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nazwa użytkownika" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Hasło" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">Zarejestruj</button>
    </form>
  );
}

export default Register;
