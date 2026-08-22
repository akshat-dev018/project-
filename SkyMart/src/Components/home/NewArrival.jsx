import { useEffect, useState } from "react";
import api from "../../services/api";
import ProductCard from "../products/ProductCard";

const NewArrivals = () => {

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");


  const getNewArrivals = async () => {

    try {

      setLoading(true);

      const response = await api.get("/products");

      const allProducts = response.data;

      /*
    FakeStore API does not have a createdAt field.
    So for now we are taking the last 4 products returned by the API.
      */

      const newProducts = allProducts.slice(-4).reverse();

      setProducts(newProducts);

    } catch (error) {

      console.log(
        "Error fetching new arrivals:",
        error
      );

      setError("Failed to load new arrivals.");

    } finally {

      setLoading(false);

    }

  };


  useEffect(() => {

    getNewArrivals();

  }, []);


  if (loading) {

    return (

      <section className="max-w-7xl mx-auto px-8 py-16">

        <h2 className="text-3xl font-bold text-white">
          New Arrivals
        </h2>

        <p className="mt-3 text-zinc-500">
          Loading products...
        </p>

      </section>

    );

  }


  if (error) {

    return (

      <section className="max-w-7xl mx-auto px-8 py-16">

        <p className="text-red-500">
          {error}
        </p>

      </section>

    );

  }


  return (

    <section className="max-w-7xl mx-auto px-8 py-16">

      {/* Heading */}

      <div className="mb-10">

        <p className="text-lime-400 text-sm font-semibold uppercase tracking-wider">
          Just In
        </p>

        <h2 className="text-4xl font-bold text-white mt-2">
          New Arrivals
        </h2>

        <p className="text-zinc-500 mt-2">
          Check out our latest products
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

export default NewArrivals;
