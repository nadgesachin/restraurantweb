import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="h-screen bg-cover bg-center relative" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
      <div className="bg-black bg-opacity-50 absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-4">Welcome to Our Restaurant</h1>
          <p className="text-xl mb-8">Experience the best cuisine in town, where tradition meets excellence.</p>
          <a href="#menu" className="bg-red-500 hover:bg-red-600 px-6 py-3 text-lg rounded-full transition duration-300">View Menu</a>
          <a href="#reservations" className="ml-4 bg-blue-500 hover:bg-blue-600 px-6 py-3 text-lg rounded-full transition duration-300">Make a Reservation</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
