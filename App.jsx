import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './components/gdgc/ProductList';
import Cart from './components/gdgc/Cart';
import PriceDetails from './components/gdgc/PriceDetails';
import SearchBar from './components/gdgc/SearchBar';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.log(error));
  }, []);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const increaseQuantity = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (id) => {
    setCart(cart.map(item =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      <header>
        <h1>E-Commerce Platform</h1>
      </header>
      <SearchBar setSearchQuery={setSearchQuery} />
      <main className="main-content">
        <ProductList products={filteredProducts} addToCart={addToCart} />
        <div className="cart-section">
          <Cart
            cart={cart}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            removeFromCart={removeFromCart}
          />
          <PriceDetails cart={cart} />
        </div>
      </main>
    </div>
  );
};

export default App;
