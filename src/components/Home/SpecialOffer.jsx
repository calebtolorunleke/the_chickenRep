import React from "react";

const SpecialOffer = () => {
  const specialOffers = [
    { head: "Mega Deal", body: "30% Off on first orders" },
  ];

  return (
    <section className="md:px-10">
      <h1 className="font-bold text-xl md:text-3xl py-5">Special Offers</h1>
      {specialOffers.map((special, index) => (
        <div
          key={index}
          className="flex flex-col bg-red-600 rounded-lg text-center space-y-5 md:py-10 md:mx-25 "
        >
          <h1 className="text-3xl text-white font-bold">{special.head}</h1>
          <h3 className="text-xl text-yellow-300">{special.body}</h3>
        </div>
      ))}
    </section>
  );
};

export default SpecialOffer;
