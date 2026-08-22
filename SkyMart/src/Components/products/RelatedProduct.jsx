import { useEffect, useState } from "react";
import api from "../../services/api";
import ProductCard from "./ProductCard";

const RelatedProducts = ({ category, currentId }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getRelatedProducts = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await api.get( `/products/category/${category}`);

      // Remove the product that the user is currently viewing
      const filteredProducts = response.data.filter(
        (product) => product.id !== currentId
      );

      setRelatedProducts(filteredProducts);
    } catch (error) {
      setError("Failed to load related products.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (category) {
      getRelatedProducts();
    }
  }, [category, currentId]);

  if (loading) {
    return (
      <section className="mt-20">
        <h2 className="text-3xl font-bold text-white">
          Related Products
        </h2>

        <p className="mt-4 text-zinc-400">
          Loading related products...
        </p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="mt-20">
        <p className="text-red-500">
          {error}
        </p>
      </section>
    );
  }

  return (
    <section className="mt-20">
      {/* Heading */}

      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white">
          Related Products
        </h2>

        <p className="mt-2 text-zinc-400">
          You might also like these products
        </p>
      </div>

      {/* Products */}

      {relatedProducts.length === 0 ? (
        <p className="text-zinc-400">
          No related products found.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {relatedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default RelatedProducts;