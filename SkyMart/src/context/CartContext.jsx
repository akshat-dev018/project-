import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState(() => {

    const savedCart = localStorage.getItem("cart");

    return savedCart? JSON.parse(savedCart): [];

  });

  const [isCartOpen, setIsCartOpen] = useState(false);


  // Save cart whenever cartItems changes

  useEffect(() => {

    localStorage.setItem("cart",JSON.stringify(cartItems));

  }, [cartItems]);


  // Add product to cart

  const addToCart = (product) => {

    setCartItems((currentItems) => {

      const existingProduct = currentItems.find(
        (item) => item.id === product.id
      );


      // Product already exists

      if (existingProduct) {

        return currentItems.map((item) =>
          item.id === product.id
            ? {
                ...item, quantity: item.quantity + 1,
              }
            : item
        );

      }


      // Product doesn't exist

      return [
        ...currentItems,
        {
          ...product,
          quantity: 1,
        },
      ];

    });

    setIsCartOpen(true);

  };


  // Remove product completely

  const removeFromCart = (productId) => {

    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== productId )
    );

  };


  // Increase quantity

  const increaseQuantity = (productId) => {

    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );

  };


  // Decrease quantity

  const decreaseQuantity = (productId) => {

    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );

  };


  // Total number of products

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );


  // Total price

  const cartTotal = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );


  return (

    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        cartCount,
        cartTotal,
        isCartOpen,
        setIsCartOpen
      }}
    >

      {children}

    </CartContext.Provider>

  );

};

export default CartProvider;