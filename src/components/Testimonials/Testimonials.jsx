import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Jane Doe',
      review: 'The food was absolutely delicious! The atmosphere is perfect for a night out.',
      rating: 5,
      image: '/path-to-customer-1.jpg',
    },
    {
      name: 'John Smith',
      review: 'Great service and even better food! Highly recommend the grilled chicken.',
      rating: 4,
      image: '/path-to-customer-2.jpg',
    },
    // Add more testimonials
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4" />
                <div>
                  <h4 className="text-2xl font-semibold">{testimonial.name}</h4>
                  <div className="text-yellow-500">
                    {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
                  </div>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
