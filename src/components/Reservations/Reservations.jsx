import React, { useState } from 'react';

const Reservations = () => {
  const [reservation, setReservation] = useState({
    date: '',
    time: '',
    guests: '',
    specialRequests: '',
  });

  const handleChange = (e) => {
    setReservation({ ...reservation, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Reservation submitted');
    // Handle form submission
  };

  return (
    <section id="reservations" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12">Reservations</h2>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto">
          <div className="mb-6">
            <label htmlFor="date" className="block text-gray-700 font-semibold mb-2">Date</label>
            <input
              type="date"
              name="date"
              id="date"
              className="w-full p-3 border border-gray-300 rounded-lg"
              value={reservation.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="time" className="block text-gray-700 font-semibold mb-2">Time</label>
            <input
              type="time"
              name="time"
              id="time"
              className="w-full p-3 border border-gray-300 rounded-lg"
              value={reservation.time}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="guests" className="block text-gray-700 font-semibold mb-2">Number of Guests</label>
            <input
              type="number"
              name="guests"
              id="guests"
              className="w-full p-3 border border-gray-300 rounded-lg"
              value={reservation.guests}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="specialRequests" className="block text-gray-700 font-semibold mb-2">Special Requests</label>
            <textarea
              name="specialRequests"
              id="specialRequests"
              className="w-full p-3 border border-gray-300 rounded-lg"
              value={reservation.specialRequests}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg w-full transition duration-300">Make Reservation</button>
        </form>
      </div>
    </section>
  );
};

export default Reservations;
