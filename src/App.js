import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Nav from "./components/Nav";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";

import items from "./items";

function App() {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(key) {
    if (!cartItems.includes(key)) {
      setCartItems((prev) => {
        const next = [...prev];
        next.push(key);
        return next;
      });
    }
  }

  function removeFromCart(key) {
    setCartItems((prev) => {
      if (prev.includes(key)) {
        const index = prev.indexOf(key);
        const next = [...prev];
        next.splice(index, 1);
        return next;
      }
    });
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Nav cartItems={cartItems} />
        <Routes>
          <Route path="/odin-shopping-cart" element={<Home />} />
          <Route
            path="/odin-shopping-cart/shop"
            element={<Shop items={items} addToCart={addToCart} />}
          />
          <Route
            path="/odin-shopping-cart/cart"
            element={
              <Cart
                items={items}
                cartItems={cartItems}
                removeFromCart={removeFromCart}
              />
            }
          />
          <Route path="*" element={<div>Page not found.</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
