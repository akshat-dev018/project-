import React from 'react'

const ProductImage = ({ image, title }) => {
  return (
    <div
      className="bg-white rounded-3xl p-10 flex items-center justify-center h-[550px] "
>
      <img src={image} alt={title}
        className="  max-h-full  object-contain"/>
    </div>
  );
};

export default ProductImage;