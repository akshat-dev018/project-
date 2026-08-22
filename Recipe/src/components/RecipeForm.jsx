import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { recipeContext } from "../context/RecipeContext";

function RecipeForm() {
  
   const {register,handleSubmit,reset,formState: { errors }} = useForm()
   const { addRecipe } = useContext(recipeContext);
    
const submitHandler = (data) => {
  addRecipe({
    name: data.name,
    chef: data.chef,
    price: Number(data.price),
    time: data.time,
    image: data.image,
    description: data.description,
  });

  reset();
};
  



   return (
    <aside className="w-full lg:w-[35%]">
      <div className="bg-white p-6 rounded-2xl shadow-lg sticky top-28">

        <h2 className="text-3xl font-bold mb-2">
          Add New Recipe
        </h2>

        <p className="text-gray-500 mb-6">
          Share your delicious recipe with everyone.
        </p>

        <form
          onSubmit={handleSubmit(submitHandler)}
          className="space-y-4"
        >

          {/* Recipe Name */}

          <div>
            <label className="block mb-2 font-medium">
              Recipe Name
            </label>

            <input
              type="text"
              name="recipeName"
              placeholder="Recipe Name"
                {...register('name',{required:{
                    value:true,
                    message:"input is required"
                },minLength:{
                    value:3,
                    message:"minimum 3 charctors required"
                }})}

              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
           {errors.recipeName && <p className="text-red-500">{errors.recipeName.message}</p>}
          {/* Chef Name */}

          <div>
            <label className="block mb-2 font-medium">
              Chef Name
            </label>
    
            <input
              type="text"
              name="chefName"
              placeholder="Chef Name"
             {...register('Chef')}
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Price + Time */}

          <div className="grid grid-cols-2 gap-4">

            <div>
              <label className="block mb-2 font-medium">
                Price
              </label>

              <input
                type="number"
                name="price"
                placeholder="Price"
              {...register('Price')}
                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Prep Time
              </label>

              <input
                type="text"
                name="prepTime"
                placeholder="30 mins"
                 {...register('time')}
                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

          </div>

          {/* Image */}

          <div>
            <label className="block mb-2 font-medium">
              Image URL
            </label>

            <input
              type="text"
              name="image"
              placeholder="Paste Image URL"
             {...register('image')}
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Description */}

          <div>

            <label className="block mb-2 font-medium">
              Description
            </label>
          
            <textarea
              rows="4"
              name="description"
              placeholder="Description..."
       {...register('description')}
              className="w-full border rounded-lg p-3 outline-none resize-none focus:ring-2 focus:ring-orange-500"
            />

          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition"
          >
            Create Recipe
          </button>

        </form>
      </div>
    </aside>
  );
}

export default RecipeForm;