import React from "react";
import {
  ShieldCheck,
  Users,
  Star,
  Truck,
  Heart,
  Zap,
  Gem,
} from "lucide-react";

import Navbar from "../layouts/Navbar";
import { useNavigate } from "react-router";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">

      {/* NAVBAR */}

      <Navbar />


      {/* MAIN CONTENT */}

      <main className="mx-auto max-w-7xl px-6 pt-32 pb-20">

        {/* ================= HERO ================= */}

        <section className="text-center">

          <h1 className="text-4xl font-bold md:text-5xl">

            About{" "}

            <span className="text-lime-400">
              SkyMart
            </span>

          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-zinc-500">

            SkyMart is a next-generation e-commerce platform
            built to make online shopping fast, fair, and
            enjoyable — for everyone.

          </p>

        </section>


        {/* ================= STATS ================= */}

        <section className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">

          {/* PRODUCTS */}

          <div
            className="
              rounded-xl
              border
              border-zinc-700
              p-6
              text-center
              transition
              hover:border-lime-400
            "
          >

            <ShieldCheck
              size={18}
              className="mx-auto text-lime-400"
            />

            <h2 className="mt-3 text-2xl font-bold">
              20K+
            </h2>

            <p className="mt-1 text-xs text-zinc-500">
              Products
            </p>

          </div>


          {/* CUSTOMERS */}

          <div
            className="
              rounded-xl
              border
              border-zinc-700
              p-6
              text-center
              transition
              hover:border-lime-400
            "
          >

            <Users
              size={18}
              className="mx-auto text-lime-400"
            />

            <h2 className="mt-3 text-2xl font-bold">
              50K+
            </h2>

            <p className="mt-1 text-xs text-zinc-500">
              Happy Customers
            </p>

          </div>


          {/* RATING */}

          <div
            className="
              rounded-xl
              border
              border-zinc-700
              p-6
              text-center
              transition
              hover:border-lime-400
            "
          >

            <Star
              size={18}
              className="mx-auto text-lime-400"
            />

            <h2 className="mt-3 text-2xl font-bold">
              4.9
            </h2>

            <p className="mt-1 text-xs text-zinc-500">
              Avg. Rating
            </p>

          </div>


          {/* DELIVERY */}

          <div
            className="
              rounded-xl
              border
              border-zinc-700
              p-6
              text-center
              transition
              hover:border-lime-400
            "
          >

            <Truck
              size={18}
              className="mx-auto text-lime-400"
            />

            <h2 className="mt-3 text-2xl font-bold">
              99%
            </h2>

            <p className="mt-1 text-xs text-zinc-500">
              On-time Delivery
            </p>

          </div>

        </section>


        {/* ================= OUR STORY ================= */}

        <section
          className="
            mt-10
            rounded-2xl
            border
            border-zinc-700
            p-8
          "
        >

          <h2 className="text-2xl font-bold">
            Our Story
          </h2>

          <div className="mt-5 space-y-4 text-sm leading-7 text-zinc-500">

            <p>
              SkyMart started in 2022 as a small side project —
              two engineers tired of bloated, slow e-commerce
              experiences. We asked ourselves: what if shopping
              online was actually enjoyable?
            </p>

            <p>
              Three years later, SkyMart serves over 50,000
              customers across the country. We stock electronics,
              fashion, jewelry, and everyday essentials — all at
              prices that don't require a second mortgage.
            </p>

            <p>
              We're still the same team at heart: obsessed with
              speed, transparency, and making you feel good about
              every purchase you make here.
            </p>

          </div>

        </section>


        {/* ================= VALUES ================= */}

        <section className="mt-12">

          <h2 className="text-center text-2xl font-bold">
            What We Stand For
          </h2>


          <div className="mt-6 grid gap-4 md:grid-cols-2">

            {/* TRUST */}

            <div
              className="
                flex
                gap-4
                rounded-xl
                border
                border-zinc-700
                p-5
                transition
                hover:border-lime-400
              "
            >

              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-lime-400/10
                "
              >

                <ShieldCheck
                  size={20}
                  className="text-lime-400"
                />

              </div>

              <div>

                <h3 className="font-semibold">
                  Trust
                </h3>

                <p className="mt-1 text-sm text-zinc-500">
                  Every product is verified for quality and
                  authenticity before listing.
                </p>

              </div>

            </div>


            {/* SPEED */}

            <div
              className="
                flex
                gap-4
                rounded-xl
                border
                border-zinc-700
                p-5
                transition
                hover:border-lime-400
              "
            >

              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-lime-400/10
                "
              >

                <Zap
                  size={20}
                  className="text-lime-400"
                />

              </div>

              <div>

                <h3 className="font-semibold">
                  Speed
                </h3>

                <p className="mt-1 text-sm text-zinc-500">
                  We obsess over delivery times so your orders
                  arrive when promised.
                </p>

              </div>

            </div>


            {/* COMMUNITY */}

            <div
              className="
                flex
                gap-4
                rounded-xl
                border
                border-zinc-700
                p-5
                transition
                hover:border-lime-400
              "
            >

              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-lime-400/10
                "
              >

                <Heart
                  size={20}
                  className="text-lime-400"
                />

              </div>

              <div>

                <h3 className="font-semibold">
                  Community
                </h3>

                <p className="mt-1 text-sm text-zinc-500">
                  Built around real customer feedback, not just
                  business metrics.
                </p>

              </div>

            </div>


            {/* QUALITY */}

            <div
              className="
                flex
                gap-4
                rounded-xl
                border
                border-zinc-700
                p-5
                transition
                hover:border-lime-400
              "
            >

              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-lime-400/10
                "
              >

                <Gem
                  size={20}
                  className="text-lime-400"
                />

              </div>

              <div>

                <h3 className="font-semibold">
                  Quality
                </h3>

                <p className="mt-1 text-sm text-zinc-500">
                  We curate the best — no filler, no junk, just
                  great products.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ================= TEAM ================= */}

        <section className="mt-12">

          <h2 className="text-center text-2xl font-bold">
            Meet the Team
          </h2>


          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">

            {/* PERSON 1 */}

            <div
              className="
                rounded-xl
                border
                border-zinc-700
                p-6
                text-center
                transition
                hover:border-lime-400
              "
            >

              <div
                className="
                  mx-auto
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-lime-400
                  font-bold
                  text-black
                "
              >
                A
              </div>

              <h3 className="mt-4 font-semibold">
                Aryan Shah
              </h3>

              <p className="mt-1 text-xs text-zinc-500">
                Founder & CEO
              </p>

            </div>


            {/* PERSON 2 */}

            <div
              className="
                rounded-xl
                border
                border-zinc-700
                p-6
                text-center
                transition
                hover:border-lime-400
              "
            >

              <div
                className="
                  mx-auto
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-blue-500
                  font-bold
                  text-white
                "
              >
                P
              </div>

              <h3 className="mt-4 font-semibold">
                Priya Mehta
              </h3>

              <p className="mt-1 text-xs text-zinc-500">
                Head of Product
              </p>

            </div>


            {/* PERSON 3 */}

            <div
              className="
                rounded-xl
                border
                border-zinc-700
                p-6
                text-center
                transition
                hover:border-lime-400
              "
            >

              <div
                className="
                  mx-auto
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-purple-500
                  font-bold
                  text-white
                "
              >
                R
              </div>

              <h3 className="mt-4 font-semibold">
                Rohan Verma
              </h3>

              <p className="mt-1 text-xs text-zinc-500">
                Lead Engineer
              </p>

            </div>


            {/* PERSON 4 */}

            <div
              className="
                rounded-xl
                border
                border-zinc-700
                p-6
                text-center
                transition
                hover:border-lime-400
              "
            >

              <div
                className="
                  mx-auto
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-rose-500
                  font-bold
                  text-white
                "
              >
                S
              </div>

              <h3 className="mt-4 font-semibold">
                Sneha Kapoor
              </h3>

              <p className="mt-1 text-xs text-zinc-500">
                Design Director
              </p>

            </div>

          </div>

        </section>


        {/* ================= CTA ================= */}

        <section
          className="
            mt-12
            rounded-2xl
            border
            border-lime-400/30
            p-10
            text-center
          "
        >

          <h2 className="text-2xl font-bold">
            Ready to shop?
          </h2>

          <p className="mt-2 text-sm text-zinc-500">
            Explore thousands of products at unbeatable prices.
          </p>

          <button
            onClick={() => navigate("/products")}
            className="
              mt-6
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-lime-400
              px-6
              py-3
              font-semibold
              text-black
              transition
              hover:bg-lime-300
            "
          >
            Browse Products
            <span>→</span>
          </button>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer
        className="
          border-t
          border-zinc-800
          py-8
          text-center
        "
      >

        <p className="font-semibold text-lime-400">
          SkyMart
        </p>

        <p className="mt-2 text-xs text-zinc-600">
          © 2025 SkyMart · Built with React
        </p>

      </footer>

    </div>
  );
};

export default About;