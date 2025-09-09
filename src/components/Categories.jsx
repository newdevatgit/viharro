function CategoriesSection() {
  const categories = [
    { 
      id: 1, 
      name: "Temples"
    },
    { 
      id: 2, 
      name: "Ghats & Rivers"
    },
    { 
      id: 3, 
      name: "Historical Sites"
    },
    { 
      id: 4, 
      name: "Hill Stations"
    },
    { 
      id: 5, 
      name: "Nature Escapes"
    },
    { 
      id: 6, 
      name: "Festivals"
    },
  ];

  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6 text-black py-4 px-8 w-full">
        Explore by Categories
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group h-40 flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-xl font-bold">{category.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoriesSection;