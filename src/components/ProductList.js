import React, { useEffect, useState } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Użyj pełnego URL lub zmiennej środowiskowej
    fetch('http://localhost:5000/api/products') // lub fetch(`${process.env.REACT_APP_API_URL}/api/products`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Błąd podczas ładowania produktów:', error));
  }, []);

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
