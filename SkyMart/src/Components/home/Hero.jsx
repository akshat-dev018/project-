import React from 'react'
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const Hero = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <section className="mt-8">

      <div
        className=" flex justify-between gap-10 rounded-[35px] border border-zinc-700 bg-[#101010]  p-14 " >

        {/* LEFT */}

        <div className="max-w-2xl">

          <p
            className="  mb-6 uppercase tracking-[4px] text-lime-400 font-semibold " >
            GOOD AFTERNOON 👋
          </p>

          <h1
            className=" text-7xlfont-boldleading-tight text-white" >
            Welcome back,

            <br />

            <span className="text-lime-400">

              {user?.name || "Guest"}!

            </span>
          </h1>

          <p
            className=" mt-8 max-w-xl text-2xl leading-10 text-zinc-400 ">
            Discover today's picks — hand-curated products
            across electronics, fashion and more.
          </p>

          <div className="mt-12 flex gap-5">

            <Link
              to="/products"
          className=" flex items-center gap-3 rounded-2x bg-lime-400 px-8 py-4 font-semibold text-black transition hover:bg-lime-300   " >
              Shop Now

              <ArrowRight size={20} />
            </Link>

            <Link
              to="/products"
              className=" rounded-2xl border border-zinc-700 px-8 py-4 font-semibold text-white hover:border-lime-400 " >
              View All Products
            </Link>

          </div>

        </div>

        {/* RIGHT */}

        <div
          className="
            flex

            flex-col

            gap-5
          "
        >

          <div
            className="
              w-52

              rounded-3xl

              border

              border-lime-400/30

              bg-lime-400/10

              p-8

              text-center
            "
          >

            <h2
              className="
                text-6xl

                font-bold

                text-lime-400
              "
            >
              20+
            </h2>

            <p className="mt-3 text-zinc-400">

              Products Available

            </p>

          </div>

          <div
            className="
              w-52

              rounded-3xl

              border

              border-zinc-700

              bg-[#121212]

              p-8

              text-center
            "
          >

            <h2
              className="
                text-5xl

                font-bold

                text-white
              "
            >
              Free
            </h2>

            <p className="mt-3 text-zinc-400">

              Delivery on ₹999+

            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;
