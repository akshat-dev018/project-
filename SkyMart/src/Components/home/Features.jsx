import React from "react";

import { Truck, ShieldCheck, RotateCcw, Headphones} from "lucide-react";

import FeatureCard from "./FeatureCard";

const Features = () => {

  return (

    <section className="border-t border-zinc-800">

      <div
        className=" mx-auto grid max-w-7xl grid-cols-1 gap-5 px-6 py-12 sm:grid-cols-2 lg:grid-cols- "
      >

        <FeatureCard
          icon={Truck}
          title="Free Shipping"
          description="On orders over $50"
        />

        <FeatureCard
          icon={ShieldCheck}
          title="Secure Payment"
          description="100% secure payment"
        />

        <FeatureCard
          icon={RotateCcw}
          title="Easy Returns"
          description="30-day return policy"
        />

        <FeatureCard
          icon={Headphones}
          title="24/7 Support"
          description="We're here to help"
        />

      </div>

    </section>

  );
};

export default Features;
