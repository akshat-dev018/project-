import { ShoppingCart, Plus, Minus, Trash2 } from "lucide-react";

import useCart from "../hooks/useCart";

const Cart = () => {

  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    cartTotal,
  } = useCart();


  if (cartItems.length === 0) {

    return (

      <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-6">

        <div className="text-center">

          <ShoppingCart
            size={60}
            className="mx-auto text-zinc-700"
          />

          <h1 className="mt-6 text-3xl font-bold text-white">
            Your cart is empty
          </h1>

          <p className="mt-2 text-zinc-500">
            Add some products to get started.
          </p>

        </div>

      </div>

    );

  }


  return (

    <div className="min-h-screen bg-zinc-950 px-6 py-10">

      <div className="mx-auto max-w-6xl">

        <h1 className="text-4xl font-bold text-white">
          Your Cart
        </h1>


        <div className="mt-10 grid gap-8 lg:grid-cols-3">


          {/* CART ITEMS */}

          <div className="space-y-5 lg:col-span-2">

            {cartItems.map((item) => (

              <div
                key={item.id}
                className="  flex gap-5 rounded-3xl border  border-zinc-800  bg-zinc-900  p- "
              >

                {/* IMAGE */}

                <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-2xl bg-white p-4">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-contain"
                  />

                </div>


                {/* INFORMATION */}

                <div className="flex flex-1 flex-col justify-between">

                  <div>

                    <p className="text-sm capitalize text-lime-400">
                      {item.category}
                    </p>

                    <h2 className="mt-1 font-semibold text-white">
                      {item.title}
                    </h2>

                  </div>


                  <div className="mt-4 flex items-center justify-between">

                    {/* QUANTITY */}

                    <div className="flex items-center gap-3">

                      <button
                        onClick={() =>
                          decreaseQuantity(item.id)
                        }
                        className="
                          rounded-lg
                          border
                          border-zinc-700
                          p-2
                          text-white
                          hover:border-lime-400
                        "
                      >
                        <Minus size={16} />
                      </button>


                      <span className="w-6 text-center text-white">
                        {item.quantity}
                      </span>


                      <button
                        onClick={() =>
                          increaseQuantity(item.id)
                        }
                        className="
                          rounded-lg
                          border
                          border-zinc-700
                          p-2
                          text-white
                          hover:border-lime-400
                        "
                      >
                        <Plus size={16} />
                      </button>

                    </div>


                    {/* PRICE */}

                    <p className="text-xl font-bold text-lime-400">
                      $
                      {(item.price * item.quantity).toFixed(2)}
                    </p>


                    {/* DELETE */}

                    <button
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                      className="text-zinc-500 hover:text-red-500"
                    >
                      <Trash2 size={20} />
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>


          {/* SUMMARY */}

          <div className="h-fit rounded-3xl border border-zinc-800 bg-zinc-900 p-6">

            <h2 className="text-2xl font-bold text-white">
              Order Summary
            </h2>


            <div className="mt-6 flex justify-between text-zinc-400">

              <span>
                Subtotal
              </span>

              <span>
                ${cartTotal.toFixed(2)}
              </span>

            </div>


            <div className="mt-3 flex justify-between text-zinc-400">

              <span>
                Shipping
              </span>

              <span>
                Free
              </span>

            </div>


            <div className="my-6 border-t border-zinc-700" />


            <div className="flex justify-between">

              <span className="text-xl font-semibold text-white">
                Total
              </span>

              <span className="text-2xl font-bold text-lime-400">
                ${cartTotal.toFixed(2)}
              </span>

            </div>


            <button
              className=" mt-6 w-full rounded-xl  bg-lime-400 py-4 font-semibold  text-black transition  hover:bg-lime-30  "
            >
              Proceed to Checkout
            </button>

          </div>

        </div>

      </div>

    </div>

  );

};

export default Cart;