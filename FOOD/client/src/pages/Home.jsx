import React from "react";
import web from "../assets/web.png";
const Home = () => {
  return (
    <>
      <div className="relative h-20 w-full border mt-0.1">
        <div className="absolute top-[150px] left-30 text-white max-w-xl px-10 ">
          <h1 className="font-extrabold text-4xl leading-tight m-2">
            Fast Food Restaurant
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
            veniam, voluptatibus ad quas neque ab quo nemo expedita, sint
            consequatur dolor? Iste aut doloribus dolores, quia delectus culpa
            fugiat eligendi fugit eos! Cum asperiores explicabo provident aut
            consequatur quod assumenda laboriosam nemo voluptates ea illo, iure
            maiores, eius perferendis dolore.
          </p>

          <button className="button  hover:bg-orange-300 shadow-lg bg-orange-600  px-6 font-semibold transition py-2  rounded-full mt-3">
            Order Now
          </button>
        </div>

        <div>
          <img src={web} className=" h-screen w-full flex-fill" />
        </div>
      </div>
    </>
  );
};

export default Home;
