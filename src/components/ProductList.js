import React, { useEffect, useState } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);

  // Pobierz produkty z backendu po załadowaniu komponentu
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:3001/api/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []); // Pusty array zapewnia, że fetch wykona się tylko raz przy pierwszym renderze

  return (
    <div>
    <h2>Produkty</h2>
    {products.length === 0 ? (
      <p>Brak produktów do wyświetlenia.</p>
    ) : (
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name} - {product.price} zł</h3>
            <p><strong>Typ jedzenia:</strong> {product.food_type}</p>
            <p><strong>Opis:</strong> {product.description}</p>
          </li>
        ))}
      </ul>
    )}
  </div>
);
}

export default ProductList;
