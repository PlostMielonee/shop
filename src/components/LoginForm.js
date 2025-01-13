import React, { useState } from 'react';

function Login({ setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    const data = await response.json();
    if (data.token) {
      setUser({ username, token: data.token });
    } else {
      alert('Błąd logowania');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nazwa użytkownika" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Hasło" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">Zaloguj</button>
    </form>
  );
}

export default Login;
