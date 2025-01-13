import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p>Cena: {product.price} zł</p>
    </div>
  );
}

export default ProductCard;
