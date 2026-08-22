import React from 'react'
import { Star, ShoppingCart, Heart } from "lucide-react";
import useCart from '../../hooks/useCart';

const ProductInfo = ({ product }) => {

  const {addToCart,cartItems} = useCart();

  const cartItem = cartItems.find(
  (item) => item.id === product.id
);

  return (
    <div className="text-white">

      {/* Category */}

      <span className="inline-block bg-lime-400/10 text-lime-400 px-3 py-1 rounded-full text-sm capitalize">
        {product.category}
      </span>


      {/* Title */}

      <h1 className="text-4xl font-bold mt-5 leading-tight">
        {product.title}
      </h1>


      {/* Rating */}

      <div className="flex items-center gap-2 mt-5">

        <div className="flex">

          {[1, 2, 3, 4, 5].map((star) => (

            <Star
              key={star}
              size={18}
              className={
                star <= Math.round(product.rating.rate)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-zinc-700"
              }
            />

          ))}

        </div>

        <span className="text-zinc-300">
          {product.rating.rate}
        </span>

        <span className="text-zinc-500">
          ({product.rating.count} reviews)
        </span>

      </div>


      {/* Divider */}

      <div className="border-t border-zinc-700 my-6" />


      {/* Price */}

      <h2 className="text-4xl font-bold text-lime-400">
        ${product.price}
      </h2>


      {/* Description */}

      <p className="text-zinc-400 leading-7 mt-6">
        {product.description}
      </p>


      {/* Buttons */}

      <div className="flex gap-3 mt-8">

<button
  onClick={() => addToCart(product)}
  className="
    flex
    flex-1
    items-center
    justify-center
    gap-2
    rounded-xl
    bg-lime-400
    py-4
    font-semibold
    text-black
    transition
    hover:bg-lime-300
  "
>
  <ShoppingCart size={18} />

  {cartItem
    ? `Added to Cart (${cartItem.quantity})`
    : "Add to Cart"
  }

</button>


        <button
          onClick={() => console.log("Added to wishlist", product)}
          className=" border border-zinc-700 p-4 rounded-xl hover:border-lime-400 transitio "
        >

          <Heart className='text-black' size={22} />

        </button>

      </div>


      {/* Benefits */}

      <div className="grid grid-cols-3 gap-3 mt-6">

        <div className="border border-zinc-700 rounded-xl p-4 text-center">

          <p className="text-sm text-black">
            Free Delivery
          </p>

          <p className="text-xs text-zinc-500 mt-1">
            On orders $50+
          </p>

        </div>


        <div className="border border-zinc-700 rounded-xl p-4 text-center">

          <p className="text-sm text-black">
            Secure Pay
          </p>

          <p className="text-xs text-zinc-500 mt-1">
            100% secure
          </p>

        </div>


        <div className="border border-zinc-700 rounded-xl p-4 text-center">

          <p className="text-sm text-black">
            Easy Returns
          </p>

          <p className="text-xs text-zinc-500 mt-1">
            30-day policy
          </p>

        </div>

      </div>

    </div>
  );
};

export default ProductInfo;
