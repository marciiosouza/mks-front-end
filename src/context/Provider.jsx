import { useState } from "react";
import { AppContext } from "./AppContext";
import PropTypes from "prop-types";

export const Provider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  

  const updateItemQuantity = (id, quantity) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    setCartItems(updatedItems);
  };

  const addItemToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      updateItemQuantity(item.id, existingItem.quantity + 1);
    } else {
      const newItem = { ...item, quantity: 1 };
      setCartItems((prevItems) => [...prevItems, newItem]);
    }
  };

  const value = {
    cartItems,
    setCartItems,
    isCartVisible,
    setIsCartVisible,
    updateItemQuantity,
    addItemToCart,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
