import React from 'react'

const CategoryCard = ({ category, count,}) => {
  return (
    <div
      className="
        cursor-pointer
        rounded-3xl
        bg-white
        p-8
        text-center
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
      "
    >
      <div className="mb-5 text-5xl">
        📦
      </div>

      <h3 className="text-xl font-semibold capitalize text-zinc-900">
        {category}
      </h3>

      <p className="mt-2 text-zinc-500">
        {count} Products
      </p>
    </div>
  );
};

export default CategoryCard;
