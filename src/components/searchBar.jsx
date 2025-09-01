import React from "react";

function SearchBar() {
  return (
    <div className="flex flex-col gap-4 bg-transparent w-full max-w-2xl mx-auto p-6 rounded-xl shadow-xl">

      <div className="text-3xl font-semibold text-gray-800 text-center">
        Find your next Adventure
      </div>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search for places, cities..."
        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg cursor-pointer mx-auto">
        Search
      </button>
    </div>
  );
}

export default SearchBar;

