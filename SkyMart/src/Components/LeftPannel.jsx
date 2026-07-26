import React from 'react'
import Logo from "../common/Logo";
import StatCard from "../common/StatCard";

const LeftPanel = () => {
  return (
    <div className="relative hidden lg:flex flex-col justify-between overflow-hidden p-16">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-10 top-20 h-96 w-96 rounded-full bg-lime-400/10 blur-[120px]" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-lime-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10">
        <Logo />
      </div>

      <div className="relative z-10">

        <p className="mb-5 uppercase tracking-[6px] text-lime-400 font-semibold">
          Welcome Back
        </p>

        <h1 className="text-6xl xl:text-7xl font-bold leading-tight text-white">
          Shop the future.
          <br />
          <span className="text-lime-400">
            Today.
          </span>
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-9 text-zinc-400">
          Thousands of products, lightning-fast delivery, and prices that
          make your wallet happy.
        </p>

      </div>

      <div className="relative z-10 flex gap-6">
        <StatCard title="20K+" subtitle="Products" />
        <StatCard title="50K+" subtitle="Users" />
        <StatCard title="4.9★" subtitle="Rating" />
      </div>

    </div>
  );
};

export default LeftPanel;