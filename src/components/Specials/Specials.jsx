import React from 'react';

const Specials = () => {
  const specials = [
    { name: 'Seasonal Pumpkin Soup', description: 'Rich and creamy soup made with fresh pumpkins', price: '$8', image: '/path-to-pumpkin-soup.jpg' },
    { name: 'Holiday Turkey', description: 'Juicy turkey served with seasonal vegetables', price: '$18', image: '/path-to-holiday-turkey.jpg' },
    // Add more specials
  ];

  return (
    <section id="specials" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12">Specials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {specials.map((special, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <img src={special.image} alt={special.name} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-3xl font-semibold mb-2">{special.name}</h3>
              <p className="text-gray-700 mb-2">{special.description}</p>
              <p className="text-red-500 font-bold">{special.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specials;
