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
          className="flex flex-row items-center justify-center gap-3 md:gap-20 pt-5 px-5"
        >
          <img
            src={Peopletake.PeopleIMG}
            alt={Peopletake.PeopleText}
            className="w-50 h-40  md:w-100 md:h-70 object-cover rounded"
          />
          <div>
            <p className="text-gray-800 max-w-md">{Peopletake.PeopleText}</p>{" "}
            <span className="font-bold">Read More...</span>
          </div>
        </section>
      ))}
    </>
  );
};

export default OurPeople;
