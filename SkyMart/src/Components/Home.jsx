import React from 'react'
import Navbar from "../layouts/Navbar";
import Hero from "../Components/home/Hero";
import Categories from './home/Categories';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0B0B0B]">

      <Navbar />

      <main className="mx-auto max-w-[1600px] px-10">

        <Hero />

        <Categories/>

      </main>

    </div>
  );
};

export default Home;
