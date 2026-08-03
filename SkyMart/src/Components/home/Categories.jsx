import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import CategoryCard from './CategoryCard';

const Categories = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchProducts = async ()=>{
        try {
            const response = await axios.get("https://fakestoreapi.com/products");
            setProducts(response.data);
        } catch (error) {
            console.log("error in api",error);
            setError("Failed to fetch categories.");
        }
        finally{
            setLoading(false);
        }
    }

    useEffect(() => {
    fetchProducts();
    }, [])

     const uniqueCategories =
      [ ...new Set( products.map( (product) => product.category)),];

  if (loading) {
  return (
     <section className="max-w-7xl mx-auto px-8 py-16">

        <h2 className="text-3xl font-bold text-white">

          Loading...

        </h2>

      </section>

    );

  }

  if (error) {

    return (

      <section className="max-w-7xl mx-auto px-8 py-16">

        <h2 className="text-red-500">

          {error}

        </h2>

      </section>

    );

  }

  return (

    <section className="max-w-7xl mx-auto px-8 py-16">

      <div className="mb-10">

        <h2 className="text-4xl font-bold text-white">

          Shop by Category

        </h2>

        <p className="mt-2 text-zinc-400">

          Browse products by category

        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {

          uniqueCategories.map((category) => {

 const count = products.filter( (product) => product.category === category ).length;

            return (

              <CategoryCard

                key={category}

                category={category}

                count={count}

              />

            );

          })

        }

      </div>

    </section>

  );

}
export default Categories
