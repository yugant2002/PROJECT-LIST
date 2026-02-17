import React from "react";
import web from "../assets/web.png";

const Home = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Home */}
      <section className="relative w-full h-[60vh] md:h-[90vh]">
        <img src={web} alt="hero" className="w-full h-full object-cover" />
        {/* selcetion ma h taki ak hi m rha ga  */}
        <div className="absolute inset-0 bg-black/40 flex items-center">
        {/* Relative= */}
          <div className="max-w-4xl mx-6 md:mx-12 text-white">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Fast Food Restaurant
            </h1>
            <p className="mt-4 text-sm md:text-base text-gray-200 max-w-2xl">
              Delicious meals prepared fast. Fresh ingredients, bold flavors and
              unbeatable combos — order now and enjoy a tasty deal today.
            </p>

            <div className="mt-6">
              <button className="bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
