import { createContext, useContext, useState } from "react";

// Create a new context for managing the shopping cart
const CartContext = createContext();

// CartProvider is a higher-order component responsible for managing the cart state
export const CartProvider = ({ children }) => {
  // Initialize the cartItems state as an empty array
  const [cartItems, setCartItems] = useState([]);

  // addToCart function adds an item to the cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // removeFromCart function removes an item from the cart
  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem !== item));
  };

  // Provide the cartItems, addToCart, and removeFromCart functions to the components
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook useCart provides easy access to the cart context values
export const useCart = () => {
  return useContext(CartContext);
};
