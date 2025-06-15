import React from "react";
import menuIMG1 from "../images/menuIMG1.png";
import menuIMG2 from "../images/menuIMG2.png";
import menuIMG3 from "../images/menuIMG3.png";
import menuIMG4 from "../images/menuIMG4.png";

const OurMenu = () => {
  const foodMenu = [
    {
      menuIMG: menuIMG1,
      menuName: "Best Seller",
    },
    {
      menuIMG: menuIMG2,
      menuName: "Burger",
    },
    {
      menuIMG: menuIMG3,
      menuName: "Chicken and Chips",
    },
    {
      menuIMG: menuIMG4,
      menuName: "Keto Chicken",
    },
  ];
  return (
    <div className="grid grid-row-1 gap-2 md:gap-5 md:grid-row-3 px-5 py-2 md:py-5">
      <h1 className="font-bold text-lg md:text-3xl">Our Menu</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-3 md:animate-marquee text-center">
        {foodMenu.map((menu, index) => (
          <div
            key={index}
            className="flex flex-col space-y-5 p-5 bg-pink-100 rounded-2xl items-center"
          >
            <img
              src={menu.menuIMG}
              alt={menu.menuName}
              className="h-20 w-20 rounded-full object-cover border border-white"
            />
            <p>{menu.menuName}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-row items-right">
        <h2>Others</h2>
        <span>→</span>
      </div>
    </div>
  );
};

export default OurMenu;
