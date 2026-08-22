import React, { useEffect, useState } from 'react'
import api from '../../services/api';
import ProductCard from '../products/ProductCard';

export const TopRated = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const getTopRatedProducts = async ()=>{
        try {
            const response = await api.get("/products");

            const sortedProducts = [...response.data]
            .sort((a,b)=>b.rating.rate-a.rating.rate).slice(0,4);
            setProducts(sortedProducts);

        } catch (error) {
            console.log("error in fetching top rated products",error)
        }finally{
            setLoading(false);
        }
    };

    useEffect(()=>{
        getTopRatedProducts();
    },[]);

    if(loading){
            return (
      <section className="max-w-7xl mx-auto px-8 py-16">

        <h2 className="text-3xl font-bold text-white">
          Top Rated
        </h2>

        <p className="mt-3 text-zinc-500">
          Loading products...
        </p>

      </section>
    );
    }

  return (

    <section className="max-w-7xl mx-auto px-8 py-16">

      {/* Heading */}

      <div className="mb-10">

        <p className="text-lime-400 text-sm font-semibold uppercase tracking-wider">
          Our Best
        </p>

        <h2 className="text-4xl font-bold text-white mt-2">
          Top Rated
        </h2>

        <p className="text-zinc-500 mt-2">
          Our highest rated products
        </p>

      </div>


      {/* Products */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {products.map((product) => (

          <ProductCard
            key={product.id}
            product={product}
          />

        ))}

      </div>

    </section>

  );

};

export default TopRated;

