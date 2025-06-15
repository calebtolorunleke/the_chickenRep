import React from "react";
import PeopleIM from "../images/ourPeople.png";

const OurPeople = () => {
  const People = [
    {
      PeopleIMG: PeopleIM,
      PeopleText:
        "Behind every soulfully spiced chicken meal and at the forefront of every great customer experience stands a passionate and committed person",
    },
  ];
  return (
    <>
      <h1 className="font-bold text-xl md:text-3xl text-center py-5 pt-10">
        Our People
      </h1>
      {People.map((Peopletake, index) => (
        <section
          key={index}
          className="flex flex-row items-center justify-center gap-45 pt-5"
        >
          <img
            src={Peopletake.PeopleIMG}
            alt={Peopletake.PeopleText}
            className="w-50 h-50 object-cover rounded-xl"
          />
          <p className="text-gray-800 max-w-md">{Peopletake.PeopleText}</p>
        </section>
      ))}
    </>
  );
};

export default OurPeople;
