import React from 'react';

const Events = () => {
  const events = [
    {
      title: 'Wine Tasting Night',
      date: 'September 25, 2024',
      time: '7:00 PM - 10:00 PM',
      description: 'Join us for a night of exquisite wines paired with gourmet dishes.',
      image: '/path-to-event-1.jpg',
    },
    {
      title: 'Live Jazz Evening',
      date: 'October 10, 2024',
      time: '6:00 PM - 9:00 PM',
      description: 'Enjoy live jazz music while savoring our chef\'s specials.',
      image: '/path-to-event-2.jpg',
    },
    // Add more events
  ];

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <img src={event.image} alt={event.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-3xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-700 mb-2"><strong>Date:</strong> {event.date}</p>
              <p className="text-gray-700 mb-4"><strong>Time:</strong> {event.time}</p>
              <p className="text-gray-700 mb-4">{event.description}</p>
              <a href="#reservations" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300">Book Now</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
