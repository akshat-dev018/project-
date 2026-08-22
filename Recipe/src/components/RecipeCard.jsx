import { useContext } from "react";
import { recipeContext } from "../context/RecipeContext";

function RecipeCard({ recipe }) {

  const { addToCart } = useContext(recipeContext);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">

      {/* Image */}

      <div className="relative h-60 overflow-hidden">

        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-full object-cover hover:scale-110 transition duration-500"
        />

        <span className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full font-semibold">
          ${recipe.price}
        </span>

      </div>

      {/* Body */}

      <div className="p-5 flex flex-col gap-4">

        {/* Title */}

        <div className="flex justify-between items-center">

          <h2 className="text-2xl font-bold">
            {recipe.name}
          </h2>

          <span className="text-yellow-500 font-semibold">
            ⭐ {recipe.rating}
          </span>

        </div>

        {/* Description */}

        <p className="text-gray-500">
          {recipe.description}
        </p>

        {/* Footer */}

        <div className="flex justify-between items-center">

          <div>

            <h4 className="font-semibold">
              {recipe.chef}
            </h4>

            <p className="text-sm text-gray-500">
              ⏱ {recipe.time}
            </p>

          </div>

          <button onClick={()=> addToCart(recipe)}
           className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg transition">
            Add To Cart
          </button>

        </div>

      </div>

    </div>
  );
}

export default RecipeCard;