import {
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  X,
  ArrowRight,
} from "lucide-react";

import useCart from "../../hooks/useCart";

const CartDrawer = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    cartTotal,
    cartCount,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  if (!isCartOpen) {
    return null;
  }

  return (
    <>
      {/* ================= BACKDROP ================= */}

      <div
        onClick={() => setIsCartOpen(false)}
        className="
          fixed
          inset-0
          z-40
          bg-black/70
          backdrop-blur-sm
        "
      />

      {/* ================= DRAWER ================= */}

      <div
        className="
          fixed
          right-0
          top-0
          z-50
          flex
          h-screen
          w-full
          max-w-md
          flex-col
          border-l
          border-zinc-800
          bg-zinc-950
        "
      >

        {/* ================= HEADER ================= */}

        <div
          className="
            flex
            shrink-0
            items-center
            justify-between
            border-b
            border-zinc-800
            px-5
            py-5
          "
        >

          <div className="flex items-center gap-3">

            <ShoppingCart
              size={20}
              className="text-lime-400"
            />

            <h2 className="font-semibold text-white">
              Cart
            </h2>

            <span
              className="
                rounded-full
                bg-lime-400
                px-2
                py-0.5
                text-xs
                font-semibold
                text-black
              "
            >
              {cartCount} items
            </span>

          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            className="
              text-zinc-500
              transition
              hover:text-white
            "
          >
            <X size={20} />
          </button>

        </div>


        {/* ================= PRODUCTS ================= */}

        <div
          className="
            flex-1
            overflow-y-auto
            p-4
          "
        >

          {cartItems.length === 0 ? (

            /* EMPTY CART */

            <div
              className="
                flex
                h-full
                flex-col
                items-center
                justify-center
                text-center
              "
            >

              <ShoppingCart
                size={50}
                className="text-zinc-700"
              />

              <h3
                className="
                  mt-5
                  text-xl
                  font-semibold
                  text-white
                "
              >
                Your cart is empty
              </h3>

              <p className="mt-2 text-sm text-zinc-500">
                Add some products to get started.
              </p>

            </div>

          ) : (

            /* CART PRODUCTS */

            <div className="space-y-3">

              {cartItems.map((item) => (

                <div
                  key={item.id}
                  className="
                    rounded-2xl
                    border
                    border-zinc-700
                    bg-zinc-900
                    p-3
                  "
                >

                  {/* PRODUCT TOP */}

                  <div className="flex gap-3">

                    {/* IMAGE */}

                    <div
                      className="
                        flex
                        h-16
                        w-16
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        bg-white
                        p-2
                      "
                    >

                      <img
                        src={item.image}
                        alt={item.title}
                        className="
                          h-full
                          w-full
                          object-contain
                        "
                      />

                    </div>


                    {/* PRODUCT INFO */}

                    <div className="min-w-0 flex-1">

                      <h3
                        className="
                          line-clamp-2
                          text-sm
                          font-medium
                          text-white
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-1
                          text-sm
                          font-semibold
                          text-lime-400
                        "
                      >
                        ${item.price.toFixed(2)}
                      </p>

                      <p className="text-xs text-zinc-600">
                        ${item.price.toFixed(2)} each
                      </p>

                    </div>


                    {/* DELETE */}

                    <button
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                      className="
                        self-start
                        text-zinc-600
                        transition
                        hover:text-red-500
                      "
                    >
                      <Trash2 size={16} />
                    </button>

                  </div>


                  {/* QUANTITY */}

                  <div
                    className="
                      mt-3
                      flex
                      items-center
                      justify-between
                    "
                  >

                    {/* QUANTITY CONTROLS */}

                    <div
                      className="
                        flex
                        items-center
                        gap-3
                      "
                    >

                      <button
                        onClick={() =>
                          decreaseQuantity(item.id)
                        }
                        className="
                          rounded-md
                          border
                          border-zinc-700
                          p-1
                          text-zinc-400
                          transition
                          hover:border-lime-400
                          hover:text-lime-400
                        "
                      >
                        <Minus size={13} />
                      </button>


                      <span
                        className="
                          w-4
                          text-center
                          text-sm
                          text-white
                        "
                      >
                        {item.quantity}
                      </span>


                      <button
                        onClick={() =>
                          increaseQuantity(item.id)
                        }
                        className="
                          rounded-md
                          border
                          border-zinc-700
                          p-1
                          text-zinc-400
                          transition
                          hover:border-lime-400
                          hover:text-lime-400
                        "
                      >
                        <Plus size={13} />
                      </button>

                    </div>


                    {/* ITEM TOTAL */}

                    <p
                      className="
                        text-sm
                        font-semibold
                        text-white
                      "
                    >
                      $
                      {(
                        item.price *
                        item.quantity
                      ).toFixed(2)}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>


        {/* ================= BOTTOM / CHECKOUT ================= */}

        <div
          className="
            shrink-0
            border-t
            border-zinc-800
            bg-zinc-950
            p-5
          "
        >

          {/* TOTAL */}

          <div
            className="
              mb-4
              flex
              items-center
              justify-between
            "
          >

            <span className="text-sm text-zinc-500">
              Total
            </span>

            <span
              className="
                text-xl
                font-bold
                text-white
              "
            >
              ${cartTotal.toFixed(2)}
            </span>

          </div>


          {/* CHECKOUT */}

          <button
            disabled={cartItems.length === 0}
            className="
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-lime-400
              py-3
              font-semibold
              text-black
              transition
              hover:bg-lime-300
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >

            Checkout

            <ArrowRight size={18} />

          </button>


          {/* CONTINUE SHOPPING */}

          <button
            onClick={() => setIsCartOpen(false)}
            className="
              mt-3
              w-full
              text-center
              text-xs
              text-zinc-600
              transition
              hover:text-zinc-400
            "
          >
            Continue Shopping
          </button>

        </div>

      </div>
    </>
  );
};

export default CartDrawer;