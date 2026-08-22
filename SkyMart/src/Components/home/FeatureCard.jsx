import React from "react";

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div
      className=" flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-5 transition duration-300 hover:-translate-y-1 hover:border-lime-400 "
    >
      {/* Icon */}

      <div
        className=" flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-lime-400 text-lime-40 "
      >
        <Icon size={24} />
      </div>

      {/* Text */}

      <div>
        <h3 className="font-semibold text-white">
          {title}
        </h3>

        <p className="mt-1 text-sm text-zinc-500">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard 
