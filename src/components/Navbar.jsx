import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  const handleLogout = () => {
    // logput logic
    setUser(null);
    setIsOpen(false);
  };

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
            <Link to="/place">Place</Link>
          </li>
          <li className="text-gray-600 hover:text-gray-800 hover:underline">
            <Link to="/about">About</Link>
          </li>
          <li className="text-gray-600 hover:text-gray-800 hover:underline">
            <Link to="/contact">Contact</Link>
          </li>
          {!user ? (
            <Link to="/signup">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg">
                Sign up
              </button>
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg"
            >
              Logout
            </button>
          )}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-600 hover:text-gray-800 focus:outline-none z-50"
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

      {/* Mobile Menu Overlay */}
      <div
        className={`${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        } md:hidden fixed inset-0 bg-black bg-opacity-95 transition-all duration-300 ease-in-out z-40`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <ul className="flex flex-col items-center space-y-8 text-2xl text-white mb-12">
            <li><Link onClick={toggleMenu} to="/" className="hover:text-purple-500 transition-colors">Home</Link></li>
            <li><Link onClick={toggleMenu} to="/place" className="hover:text-purple-500 transition-colors">Place</Link></li>
            <li><Link onClick={toggleMenu} to="/about" className="hover:text-purple-500 transition-colors">About</Link></li>
            <li><Link onClick={toggleMenu} to="/contact" className="hover:text-purple-500 transition-colors">Contact</Link></li>
          </ul>

          <div className="flex flex-col items-center space-y-4 w-64">
            {!user ? (
              <>
                <Link
                  onClick={toggleMenu}
                  to="/login"
                  className="w-full border border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-colors text-center"
                >
                  Log in
                </Link>
                <Link
                  onClick={toggleMenu}
                  to="/signup"
                  className="w-full bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors text-center"
                >
                  Sign up
                </Link>
              </>
            ) : (
              <>
                <Link
                  onClick={toggleMenu}
                  to="/profile"
                  className="w-full border border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-colors text-center"
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full bg-red-500 text-white px-6 py-3 rounded-full font-medium hover:bg-red-600 transition-colors"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
