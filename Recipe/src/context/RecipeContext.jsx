import { createContext, useState } from "react";
import recipesData from "../data/recipes";


export const recipeContext = createContext()

export const RecipeProvider = ({ children }) => {

         const [recipes, setRecipes] = useState(recipesData);
        const [cartItems, setCartItems] = useState([]);
        const [search, setSearch] = useState("");

        // Add to search
        const addToCart = (recipe) => {
        const exist = cartItems.find((item) => item.id === recipe.id);

    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === recipe.id
            ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        {
          ...recipe,
          quantity: 1,
        },
      ]);
    }
  };

         // Increase Quantity
         const increaseQuantity = (id) => {
            setCartItems(
             cartItems.map((item) =>
             item.id === id
                 ? { ...item, quantity: item.quantity + 1 }: item
      )
    );
  };

  // Decrease Quantity
    const decreaseQuantity = (id) => {
    setCartItems(
      cartItems
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }: item
        )
        .filter((item) => item.quantity > 0)
    );
  };


          // Remove Item
        const removeItem = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
                };

            //addRecipe 
                const addRecipe = (recipe) => {
                 const newRecipe = {
                id: Date.now(),
                ...recipe,
                rating: recipe.rating || 4.5,
                     };

          setRecipes((prev) => [newRecipe, ...prev]);
            };


    return  <recipeContext.Provider
      value={{
        recipes,
        setRecipes,
        cartItems,
        setCartItems,
        search,
        setSearch,
        addToCart,
        addRecipe, 
        increaseQuantity,
        decreaseQuantity,
        removeItem,
      }}
    >
      {children}
    </recipeContext.Provider>
}

export default RecipeProvider