import { useEffect, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";

import api from "../../services/api";
import ProductCard from "./ProductCard";

const Products = ()=>{
    
  const [products, setProducts] = useState([]);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("all");

  const [sort, setSort] = useState("featured");

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

    const getProducts = async ()=>{
        try {
            setLoading(true);
            setError("");
            const response = await api.get("/products");
            setProducts(response.data);
            setFilteredProducts(response.data);
        } catch (error) {
            setError("Unable to load Products");
        }finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        getProducts();
    },[])

   useEffect(() => {
  let result = [...products];

  // Search
  if (search.trim() !== "") {
    result = result.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Category
  if (category !== "all") {
    result = result.filter(
      (product) => product.category === category
    );
  }

  // Sorting
  if (sort === "price-low") {
    result.sort((a, b) => a.price - b.price);
  } else if (sort === "price-high") {
    result.sort((a, b) => b.price - a.price);
  } else if (sort === "rating") {
    result.sort((a, b) => b.rating.rate - a.rating.rate);
  } else if (sort === "featured") {
    result.sort((a, b) => b.rating.rate - a.rating.rate);
  }

  setFilteredProducts(result);

}, [search, category, sort, products]);

     const categories = [...new Set(products.map((product) => product.category)),];

       if (loading) {

    return (
      <div className="min-h-screen bg-zinc-950 px-6 py-20">

        <p className="text-center text-xl text-zinc-400">
          Loading products...
        </p>

      </div>
    );
}

  if (error) {

    return (
      <div className="min-h-screen bg-zinc-950 px-6 py-20">

        <p className="text-center text-red-500">
          {error}
        </p>

      </div>
    );

  }



return (

    <div className="min-h-screen bg-zinc-950 px-6 py-10">

      <div className="mx-auto max-w-7xl">



        <div
          className=" mb-8 flex flex-col gap-4 rounded-3xl border border-zinc-700 p-5 md:flex-row  "
        >


          {/* SEARCH */}

          <div className="relative flex-1">

            <Search
              size={20}
              className=" absolute left-5 top-1/2 -translate-y-1/2 text-zin  "
            />

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className=" w-full rounded-2xl border border-zinc-700 bg-zinc-900 py-4  pl-14 pr-5 text-white outline-none transition placeholder:text-zinc-500 focus:border-lim "
            />

          </div>


          {/* CATEGORY */}

          <div className="relative">

            <SlidersHorizontal
              size={18}
              className=" pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
            />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className=" w-full appearance-none rounded-2xl border border-zinc-700 bg-zinc-900 py-4 pl-11 pr-10 text-white outline-none focus:border-lime-400 md "
            >

              <option value="all">
                All Categories
              </option>

              {categories.map((category) => (

                <option
                  key={category}
                  value={category}
                >
                  {category}
                </option>

              ))}

            </select>

          </div>


          {/* SORT */}

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className=" appearance-none rounded-2xl border border-zinc-700 bg-zinc-900 px-5 py-4 text-white outline-none focus:border-lime-400 md "
          >

            <option value="featured">
              Featured
            </option>

            <option value="rating">
              Top Rated
            </option>

            <option value="price-low">
              Price: Low to High
            </option>

            <option value="price-high">
              Price: High to Low
            </option>

          </select>

        </div>


        {/* ================================= */}
        {/* RESULT COUNT */}
        {/* ================================= */}

        <div className="mb-6 flex items-center justify-between">

          <h1 className="text-2xl font-bold text-white">
            All Products
          </h1>

          <p className="text-sm text-zinc-500">
            {filteredProducts.length} products
          </p>

        </div>


        {/* ================================= */}
        {/* PRODUCT GRID */}
        {/* ================================= */}

        {filteredProducts.length === 0 ? (

          <div className="rounded-3xl border border-zinc-800 py-20 text-center">

            <p className="text-xl text-zinc-400">
              No products found
            </p>

            <button
              onClick={() => {
                setSearch("");
                setCategory("all");
              }}
              className=" mt-5 rounded-xl bg-lime-400 px-6 py-3 font-semibold text-black "
            >
              Clear Filters
            </button>

          </div>

        ) : (

          <div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"          >

            {filteredProducts.map((product) => (

              <ProductCard
                key={product.id}
                product={product}
              />

            ))}

          </div>

        )}

      </div>

    </div>

  );
}


export default Products;