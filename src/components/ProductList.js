import React, { useEffect, useState } from 'react';

function ProductList({ user }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (user && user.token) {
      fetch('http://localhost:3001/api/products', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${user.token}`,
        }
      })
        .then(res => res.json())
        .then(data => setProducts(data))
        .catch(error => console.error('Błąd podczas pobierania produktów:', error));
    }
  }, [user]);

  return (
    <div>
      <h2>Produkty</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name} - {product.price} zł</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
