import React from 'react'
import Hero from "../Components/home/Hero";
import Categories from './home/Categories';
import TopRated from './home/TopRated';
import NewArrivals from './home/NewArrival';
import Features from './home/Features';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0B0B0B]">

      

      <main className="mx-auto max-w-[1600px] px-10">

        <Hero />

        <Categories/>

        <TopRated/>

        <NewArrivals/>

        <Features/>

      </main>

    </div>
  );
};

export default Home;
