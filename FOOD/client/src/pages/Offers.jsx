import React from "react";
import { Link } from "react-router-dom";

import web from "../assets/web.png";
import bargur from "../assets/bargur.png";

const FeaturedOffer = () => (
  <section className="mt-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
      <div className="md:col-span-2 bg-linear-to-r from-orange-500 to-pink-500 rounded-xl p-6 text-white flex items-center gap-6">
        <img
          src={bargur}
          alt="Featured burger"
          className="w-32 h-32 rounded-full object-cover border-4 border-yellow-300 shadow-lg"
        />

        <div>
          <h3 className="text-2xl font-extrabold">
            Tasty Thursdays — Special Combo
          </h3>
          <p className="mt-2 text-sm opacity-90 max-w-lg">
            Get our signature burger with fries and a drink. Freshly made,
          </p>

          <div className="mt-4 flex items-center gap-4">
            <span className="bg-yellow-300 text-gray-900 px-3 py-1 rounded-full font-bold">
              20% Off
            </span>
            <button className="ml-auto bg-white text-orange-600 px-4 py-2 rounded-full font-semibold shadow hover:opacity-95">
              Order Now
            </button>
          </div>
        </div>
      </div>

      <div className="hidden md:block rounded-xl overflow-hidden">
     <h1>hnnjnjnnk
        
     </h1>
      </div>
    </div>
  </section>
);

const Offers = () => {
  return (
    <main className="min-h-screen bg-gray-50 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        <FeaturedOffer />
      </div>
    </main>
  );
};

export default Offers;
