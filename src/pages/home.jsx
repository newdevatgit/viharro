import React from "react";
import SearchBar from "../components/searchBar.jsx";
import Categories from "../components/Categories.jsx";

function Home() {
  const Destinations = [
    {
      Title: "Card 1",
      image: "src/assets/Home_bg.png",
      Description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      Title: "Card 2",
      image: "src/assets/Home_bg.png",
      Description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      Title: "Card 3",
      image: "src/assets/Home_bg.png",
      Description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      Title: "Card 4",
      image: "src/assets/Home_bg.png",
      Description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      Title: "Card 5",
      image: "src/assets/Home_bg.png",
      Description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      Title: "Card 6",
      image: "src/assets/Home_bg.png",
      Description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div
        className="flex flex-col items-center min-h-screen justify-center p-4"
        style={{
          backgroundImage: 'url("src/assets/Home_bg.png")',
          backgroundSize: "cover",
        }}
      >
        <SearchBar />
      </div>

      {/* Sliding Destinations Section */}
      <div className="container mx-auto">
        <h1 className="text-3xl p-6 text-blue">Explore the popular cities</h1>

        <div className="flex space-x-6 overflow-x-auto p-6 scrollbar-hide">
          {Destinations.map((destination, index) => (
            <div
              key={index}
              className="bg-white flex-shrink-0 w-80 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                className="w-full h-48 object-cover mb-4 rounded-xl"
                src={destination.image}
                alt={`Card ${index + 1}`}
              />
              <h2 className="text-lg font-semibold">{destination.Title}</h2>
              <p className="text-gray-600">{destination.Description}</p>
            </div>
          ))}
        </div>

        {/* Categories Section */}
        <Categories />
      </div>

      {/* Hide Scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
}

export default Home;
