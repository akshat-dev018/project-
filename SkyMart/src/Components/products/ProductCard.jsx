import React from "react";
import { Link } from "react-router";
import { ShoppingCart, Star } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`}>
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-lime-400 transition duration-300">

        {/* Image */}
        <div className="bg-white h-64 flex items-center justify-center p-6">
          <img
            src={product.image}
            alt={product.title}
            className="h-48 object-contain"
          />
        </div>

        {/* Content */}
        <div className="p-5 space-y-4">

          {/* Category */}
          <span className="text-xs px-3 py-1 rounded-full bg-zinc-800 text-lime-400 capitalize">
            {product.category}
          </span>

          {/* Title */}
          <h2 className="text-white font-semibold text-lg line-clamp-2">
            {product.title}
          </h2>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <Star
              size={16}
              className="fill-yellow-400 text-yellow-400"
            />

            <span className="text-zinc-400 text-sm">
              {product.rating.rate}
            </span>

            <span className="text-zinc-600 text-sm">
              ({product.rating.count})
            </span>
          </div>

          {/* Bottom */}
          <div className="flex items-center justify-between">

            <h3 className="text-2xl font-bold text-lime-400">
              ${product.price}
            </h3>

            <button
              className="bg-lime-400 text-black p-3 rounded-xl hover:scale-105 transition"
              onClick={(e) => {
                e.preventDefault();
                console.log("Add to cart");
              }}
            >
              <ShoppingCart size={18} />
            </button>

          </div>

        </div>

      </div>
    </Link>
  );
};

export default ProductCard;