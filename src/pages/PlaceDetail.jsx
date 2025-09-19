import React, { useState } from 'react';

const StarIcon = ({ className, filled = true }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const MapPinIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ChevronLeftIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m15 18-6-6 6-6"/></svg>
);

const ChevronRightIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m9 18 6-6-6-6"/></svg>
);


// --- PlaceDetail Component ---

const PlaceDetail = ({ place }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!place) {
    return <div>Loading place details...</div>;
  }
  
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % place.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + place.images.length) % place.images.length);
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-4xl mx-auto my-8">
      {/* Image Gallery */}
      <div className="relative w-full h-64 md:h-96">
        {place.images.map((img, index) => (
          <img
            key={index}
            src={img.url}
            alt={img.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/800x400/cccccc/ffffff?text=Image+Not+Found'; }}
          />
        ))}
         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-2 rounded-full transition-transform transform active:scale-90">
            <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-2 rounded-full transition-transform transform active:scale-90">
            <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>

      <div className="p-6 md:p-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">{place.title}</h1>
            <div className="flex items-center text-gray-500 mt-2">
              <MapPinIcon className="w-5 h-5 mr-2" />
              <span>{place.location}</span>
            </div>
          </div>
          <div className="flex items-center mt-4 md:mt-0 bg-blue-100 text-blue-800 font-bold px-4 py-2 rounded-full">
            <StarIcon className="w-5 h-5 mr-2 text-blue-600" />
            <span>{place.rating.toFixed(1)}</span>
          </div>
        </div>

        {/* Tags Section */}
        <div className="flex flex-wrap gap-2 mb-6">
          {place.tags.map(tag => (
            <span key={tag} className="bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full">{tag}</span>
          ))}
        </div>

        {/* Description Section */}
        <div className="prose max-w-none text-gray-600 mb-6">
          <p>{place.description}</p>
        </div>

        {/* Features Section */}
        <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Features & Tips</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {place.features.map((feature, index) => (
                    <li key={index} className="bg-gray-50 p-4 rounded-lg flex items-start">
                        <span className="text-green-500 mr-3 mt-1">✓</span>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </div>
  );
};


// --- Main App Component ---

export default function App() {
  // Mock data for a travel destination
  const tajMahalData = {
    title: "Taj Mahal",
    location: "Agra, India",
    rating: 4.9,
    tags: ["UNESCO World Heritage", "Historic", "Architecture", "Monument"],
    description: "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favourite wife, Mumtaz Mahal. It is the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage.",
    images: [
      { url: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2942&auto=format&fit=crop", alt: "Front view of the Taj Mahal"},
      { url: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2942&auto=format&fit=crop", alt: "Taj Mahal with reflection in the water"},
      { url: "https://images.unsplash.com/photo-1587135941948-67083818a74a?q=80&w=2942&auto=format&fit=crop", alt: "Detailed marble inlay work on the Taj Mahal"}
    ],
    features: [
        "Visit during sunrise for breathtaking views and fewer crowds.",
        "Photography is allowed, but tripods require special permission.",
        "Wear comfortable shoes as you will need to walk a lot.",
        "Hire a licensed guide to understand the rich history.",
        "Night viewing is available on five nights a month around the full moon."
    ]
  };

  return (
    <div className="bg-gray-100 min-h-screen font-sans flex items-center justify-center p-4">
      <PlaceDetail place={tajMahalData} />
    </div>
  );
}

