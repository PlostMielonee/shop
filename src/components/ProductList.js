import React, { useEffect, useState } from "react";
import { BsCart4 } from "react-icons/bs";
import { CiCircleRemove } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [sortCriteria, setSortCriteria] = useState("name"); // Domyślne kryterium sortowania
  const [cart, setCart] = useState([]);
  const [cartHistory, setCartHistory] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:3001/api/products");
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const sortProducts = (products, criteria) => {
    return [...products].sort((a, b) => {
      if (criteria === "price") {
        return a.price - b.price; // sortowanie po cenie (rosnąco)
      }
      if (criteria === "name") {
        return a.name.localeCompare(b.name); // sortowanie alfabetyczne
      }
      if (criteria === "food_type") {
        return a.food_type.localeCompare(b.food_type); // sortowanie po typie
      }
      return 0;
    });
  };

  const sortedProducts = sortProducts(products, sortCriteria);

  const getTotalPrice = () => {
    // oblicza cene
    return cart.reduce((total, item) => total + parseFloat(item.price), 0); // robie z niego liczbe bo okazało się że jest to string dlatego wynik wychodził dziwny 
  };

  const handleCheckout = () => {
    // sprawdza czy koszyk jest pusty
    if (cart.length === 0) {
      alert("Twój koszyk jest pusty!");
      return;
    }

    setCartHistory((prevHistory) => [
      // zapisuje date godzine itp zakupu
      ...prevHistory,
      { cart, total: getTotalPrice(), date: new Date() },
    ]);
    setCart([]);
    alert("Dziękujemy za zakupy! Twój koszyk został zapisany w historii.");
  };

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]); // dodaje do kosza
  };

  const removeFromCart = (productId) => {
    // usuwa z kosza
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Nasze produkty</h2>

      <div className="label mb-4">
        <label className=" form-label">Sortuj według:</label>
        <select
          id="sort"
          className="label form-select"
          value={sortCriteria}
          onChange={(e) => setSortCriteria(e.target.value)}
        >
          <option value="name">Nazwa</option>
          <option value="price">Cena</option>
          <option value="food_type">Typ jedzenia</option>
        </select>
      </div>

      {sortedProducts.length === 0 ? (
        <p className="text-center">Brak produktów do wyświetlenia.</p>
      ) : (
        <div className="card-holder row">
          {sortedProducts.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card">
                {/*<img
                  src={`https://localhost:3000/css/img/${product.name}.jpg`} nie jestem w stanie mu przekazać obrazów
                  className="label card-img-top"
                  alt={product.name}
                />*/}

                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">
                    <span>Cena:</span> {product.price} zł
                  </p>
                  <p className="card-text">
                    <span>Typ jedzenia:</span> {product.food_type}
                  </p>
                  <p className="card-text">
                    <span>Opis:</span> {product.description}
                  </p>
                  <button
                    onClick={() => addToCart(product)}
                    className="buy-button submit-button btn"
                  >
                    <BsCart4 className="react-shop-icon" />
                    Dodaj do koszyka
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <hr />
      <h2>Koszyk</h2>
      {cart.length === 0 ? (
        <p>Koszyk jest pusty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <h3>
                  {item.name} - {item.price} zł
                </h3>
                <button
                  className="remove-button btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Usuń
                </button>
              </li>
            ))}
          </ul>
          <h3>Całkowita cena: {getTotalPrice()} zł</h3>
          <button
            className="order-button submit-button btn"
            onClick={handleCheckout}
          >
            Zamów
          </button>
        </div>
      )}
      <hr />
      <h2>Historia zakupów</h2>
      {cartHistory.length === 0 ? (
        <p>Brak historii zakupów.</p>
      ) : (
        <div>
          {cartHistory.map((entry, index) => (
            <div key={index} style={{ marginBottom: "20px" }}>
              <h3>
                Zakup z dnia: {entry.date.toLocaleDateString()}{" "}
                {entry.date.toLocaleTimeString()}
              </h3>
              <ul>
                {entry.cart.map((item) => (
                  <li key={item.id}>
                    {item.name} - {item.price} zł
                  </li>
                ))}
              </ul>
              <h4>Całkowita cena: {entry.total} zł</h4>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
