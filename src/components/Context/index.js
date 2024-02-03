"use client";
import { createContext, useState, useEffect } from "react";

export const Context = createContext(null);

function GlobalState({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function handleAddToCart(getCurrentItem) {
    let copyCartItems = [...cartItems];
    const indexOfCurrentItem = copyCartItems.findIndex(
      (item) => item.id === getCurrentItem.id
    );

    if (indexOfCurrentItem === -1) {
      copyCartItems.push(getCurrentItem);
    } else {
      // Set the quantity directly without multiplication
      copyCartItems[indexOfCurrentItem] = {
        ...copyCartItems[indexOfCurrentItem],
        quantity: getCurrentItem.quantity,
      };
    }

    setCartItems(copyCartItems);
    localStorage.setItem("cartItems", JSON.stringify(copyCartItems));
  }

  function removeFromCart(getCurrentId) {
    let copyCartItems = [...cartItems];
    const updatedCartItems = copyCartItems.filter(
      (item) => item.id !== getCurrentId
    );

    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  }

  function increaseQuantity(getCurrentId) {
    let copyCartItems = [...cartItems];
    const updatedCartItems = copyCartItems.map((item) => {
      if (item.id === getCurrentId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  }

  function decreaseQuantity(getCurrentId) {
    let copyCartItems = [...cartItems];
    const updatedCartItems = copyCartItems.map((item) => {
      if (item.id === getCurrentId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });

    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  }

  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem("cartItems")) || []);
  }, []);

  return (
    <Context.Provider
      value={{
        cartItems,
        handleAddToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default GlobalState;
