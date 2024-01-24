"use client";
import { createContext, useState } from "react";

export const Context = createContext(null);

function GlobalState({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function handleAddToCart(getCurrentItems) {
    console.log("Context data ",getCurrentItems);
  }

  return (
    <Context.Provider value={{ cartItems, handleAddToCart }}>
      {children}
    </Context.Provider>
  );
}
export default GlobalState;
