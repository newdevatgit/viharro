import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white border p-3 w-full">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-gray-800 font-bold text-lg">VIHARRO</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li className="text-gray-600 hover:text-gray-800 hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li className="text-gray-600 hover:text-gray-800 hover:underline">
            <Link to="/about">About</Link>
          </li>
          <li className="text-gray-600 hover:text-gray-800 hover:underline">
            <Link to="/contact">Contact</Link>
          </li>
          <Link to="/signup">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg">
              Sign up
            </button>
          </Link>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-600 hover:text-gray-800 focus:outline-none"
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
            <li className="text-gray-600 hover:text-gray-800 hover:underline">
              <Link to="/">Home</Link>
            </li>
            <li className="text-gray-600 hover:text-gray-800 hover:underline">
              <Link to="/about">About</Link>
            </li>
            <li className="text-gray-600 hover:text-gray-800 hover:underline">
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/signup">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg">
                  Sign up
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
