import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-800 p-4 rounded-xl border-2 border-green-700">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-lg">VIHARRO</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li className="text-gray-300 hover:text-white hover:underline">
            <a href="#">Home</a>
          </li>
          <li className="text-gray-300 hover:text-white hover:underline">
            <a href="#">About</a>
          </li>
          <li className="text-gray-300 hover:text-white hover:underline">
            <a href="#">Contact</a>
          </li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-200 hover:text-white focus:outline-none"
        >
          <svg
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col space-y-4">
            <li className="text-gray-300 hover:text-white hover:underline">
              <a href="#">Home</a>
            </li>
            <li className="text-gray-300 hover:text-white hover:underline">
              <a href="#">About</a>
            </li>
            <li className="text-gray-300 hover:text-white hover:underline">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
