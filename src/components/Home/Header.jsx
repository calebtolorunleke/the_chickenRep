import React, { useState } from "react";
import Logo from "../images/Logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
      <div className="max-w-6xl mx-auto px-6 sm:px-6 py-4 flex items-center justify-between">
        <img
          src={Logo}
          alt="Logo"
          className="w-9 sm:w-10 md:w-12 h-8 sm:h-12 md:h-12"
        />
        <ul className="hidden md:flex flex-row gap-10">
          <li>
            <a href="">Homepage</a>
          </li>
          <li>
            <a href="">Menu</a>
          </li>
          <li>
            <a href="">Promos</a>
          </li>
          <li>
            <a href="">Store Locator</a>
          </li>
          <li>
            <a href="">Brand</a>
          </li>
          <li>
            <a href="">News</a>
          </li>
        </ul>

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden absolute top-16 right-4 flex flex-col bg-red-500 gap-1 w-40 text-white rounded-xl p-3 shadow-lg z-50">
          <a href="">Homepage</a>
          <a href="">Menu</a>
          <a href="">Promos</a>
          <a href="">Store Locator</a>
          <a href="">Brand</a>
          <a href="">News</a>
        </div>
      )}
    </div>
  );
};

export default Header;
