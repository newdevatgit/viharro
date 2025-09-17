import React from "react";

function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="max-w-3xl bg-white rounded-xl shadow-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">About Us</h1>
        <p className="text-gray-700 leading-relaxed mb-6">
          Welcome to <span className="font-semibold">viharro</span>! 🌍  
          Our mission is to help people discover hidden gems, popular attractions,
          and cultural highlights of different cities.  
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          This platform allows travelers and locals alike to explore beautiful
          places, share their own experiences, and connect with communities
          across India. From historical landmarks to local food, we bring the
          best of each city to your fingertips.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Built with ❤️ by a passionate team of developers, we aim to make city
          exploration simple, engaging, and fun.
        </p>
      </div>
    </div>
  );
}

export default About;
