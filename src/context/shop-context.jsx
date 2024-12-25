import React, { useState, createContext } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};
export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prevItems) => {
      return { ...prevItems, [itemId]: prevItems[itemId] + 1 };
    });
  };
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => {
      return { ...prevItems, [itemId]: prevItems[itemId] - 1 };
    });
  };
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
      totalAmount += cartItems[item] * itemInfo.price;
    }
    return totalAmount;
  };
  const updateCartItemCount = (newAmount, id) => {
    setCartItems((prevItems) => {
      return { ...prevItems, [id]: newAmount };
    });
  };
  console.log(cartItems);
  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    updateCartItemCount,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
