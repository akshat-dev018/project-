import { useContext } from "react";
import { recipeContext } from "../context/RecipeContext";

function CartDrawer({ isOpen, onClose }) {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
  } = useContext(recipeContext);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-end z-50">
      <div className="w-full sm:w-96 bg-white h-screen p-5 overflow-y-auto shadow-xl">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-4 mb-5">
          <h2 className="text-2xl font-bold">Your Cart</h2>

          <button
            onClick={onClose}
            className="text-3xl font-bold"
          >
            ×
          </button>
        </div>

        {/* Cart Items */}
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">
            Your cart is empty.
          </p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 mb-6 border-b pb-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-20 w-20 rounded-lg object-cover"
              />

              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="font-semibold">
                    {item.name}
                  </h3>

                  <span className="font-bold text-orange-500">
                    ${item.price}
                  </span>
                </div>

                <p className="text-sm text-gray-500">
                  {item.chef}
                </p>

                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center rounded-lg border">
                    <button
                      className="px-3 py-1"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      -
                    </button>

                    <span className="px-4">
                      {item.quantity}
                    </span>

                    <button
                      className="px-3 py-1"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="text-red-500"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default CartDrawer;