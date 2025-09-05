import React from "react";
import SearchBar from "../components/searchBar.jsx";

function Home() {
    const Destinations = [{
        Title: "Card 1",
        image: "src/assets/Home_bg.png",
        Description: "This is a description for card 1."
    },
    {
        Title: "Card 2",
        image: "src/assets/Home_bg.png",
        Description: "This is a description for card 2."
    },
    {
        Title: "Card 3",
        image: "src/assets/Home_bg.png",
        Description: "This is a description for card 3."
    }
    ]
    return (
        <>
        <div className="flex flex-col items-center min-h-screen justify-center p-4" style={{ backgroundImage: 'url("src/assets/Home_bg.png")', backgroundSize: 'cover' }}>
            <SearchBar />
        </div>

        <div className="container mx-auto">
            <h1 className="text-3xl p-6 text-blue">Explore the popular cities</h1>
            <div className="grid grid-cols-3 rounded-lg gap-4 p-6">
                {Destinations.map((destination, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <img className="w-full h-48 object-cover mb-4 rounded-xl" src={destination.image} alt={`Card ${index + 1}`} />
                        <h2 className="text-lg font-semibold">{destination.Title}</h2>
                        <p className="text-gray-600">{destination.Description}</p>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Home;