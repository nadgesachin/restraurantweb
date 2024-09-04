import React from 'react';

const Gallery = () => {
  const galleryImages = [
    '/path-to-dish-1.jpg',
    '/path-to-dish-2.jpg',
    '/path-to-restaurant-interior.jpg',
    '/path-to-event-1.jpg',
    // Add more image paths
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative group">
              <img src={image} alt={`Gallery image ${index + 1}`} className="w-full h-64 object-cover rounded-lg shadow-lg" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <span className="text-white font-bold text-lg">View Image</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
