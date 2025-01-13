import React, { useState } from 'react';

function OrderForm({ products }) {
  const [order, setOrder] = useState([]);

  const handleOrder = () => {
    fetch('http://localhost:3001/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: 1, // Przykładowe ID użytkownika
        products: order,
      }),
    })
      .then(res => res.json())
      .then(data => {
        alert(`Zamówienie nr ${data.orderId} zostało złożone!`);
      });
  };

  return (
    <div>
      <button onClick={handleOrder}>Złóż zamówienie</button>
    </div>
  );
}

export default OrderForm;
