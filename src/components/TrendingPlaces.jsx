function TrendingPlaces() {
  const trending = [
    { id: 1, name: "Taj Mahal", city: "Agra", image: "https://placehold.co/400x250", rating: 4.9 },
    { id: 2, name: "Jaipur Palace", city: "Jaipur", image: "https://placehold.co/400x250", rating: 4.7 },
    { id: 3, name: "Varanasi Ghats", city: "Varanasi", image: "https://placehold.co/400x250", rating: 4.8 },
    { id: 4, name: "Goa Beaches", city: "Goa", image: "https://placehold.co/400x250", rating: 4.6 },
    { id: 5, name: "Kerala Backwaters", city: "Kerala", image: "https://placehold.co/400x250", rating: 4.9 },
    { id: 6, name: "Hampi Ruins", city: "Hampi", image: "https://placehold.co/400x250", rating: 4.8 },
    { id: 7, name: "Rishikesh", city: "Rishikesh", image: "https://placehold.co/400x250", rating: 4.7 },
    { id: 8, name: "Mysore Palace", city: "Mysore", image: "https://placehold.co/400x250", rating: 4.6 },
    { id: 9, name: "Darjeeling Hills", city: "Darjeeling", image: "https://placehold.co/400x250", rating: 4.8 },
    { id: 10, name: "Andaman Islands", city: "Andaman", image: "https://placehold.co/400x250", rating: 4.9 },
  ];

  return (
    <div className="mt-10 px-4 ">
      <h2 className="text-2xl font-bold mb-4">🔥 Trending Places</h2>
      <div className="flex space-x-6 overflow-x-auto scrollbar-hide py-4">
        {trending.map((place) => (
          <div key={place.id} className="flex-shrink-0 w-72 bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">
            <img src={place.image} alt={place.name} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{place.name}</h3>
              <p className="text-gray-500">{place.city}</p>
              <p className="text-yellow-500 font-bold">⭐ {place.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingPlaces;