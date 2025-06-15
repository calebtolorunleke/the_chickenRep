import React from "react";
import Firstly1 from "../images/firstlyIMG.png";
import Logo from "../images/Logo.png";

const Firstly = () => {
  return (
    <section className="pt-16 overflow-x-hidden">
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full bg-yellow-300">
        {/* Text Content */}
        <div className="flex flex-col items-center md:items-start justify-center px-6 py-10 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold max-w-md">
            ENJOY OUR SOULFULLY SPICED CHICKEN MEALS
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 w-full max-w-sm">
            <button className="bg-red-500 px-6 py-2 text-white rounded-xl w-full">
              Order Now
            </button>
            <button className="bg-red-500 px-6 py-2 text-white rounded-xl w-full">
              Find a Store
            </button>
          </div>
        </div>

        {/* Image Content */}
        <div className="flex justify-center items-center py-3 md:py-10">
          <img
            src={Firstly1}
            alt="Chicken Meal"
            className="w-30 h-30 md:w-60 md:h-60 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Info Banner Section */}
      <div className="w-full bg-red-500 py-4 grid place-items-center overflow-hidden">
        <div className="flex items-center gap-3 px-4 animate-marquee">
          <img
            src={Logo}
            alt="Logo"
            className="w-6 h-6 rounded-full border border-yellow-600"
          />
          <span className="text-white text-sm whitespace-nowrap">
            Order online from 9am to 8pm daily
          </span>
        </div>
      </div>
    </section>
  );
};

export default Firstly;
