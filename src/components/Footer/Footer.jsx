import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-2xl font-bold mb-4">Restaurant Name</h3>
          <p className="mb-4">Address: 123 Main Street, City, Country</p>
          <p className="mb-4">Phone: +123 456 7890</p>
          <p className="mb-4">Email: info@restaurant.com</p>
          <p className="mb-4">Opening Hours: Mon-Sun: 11 AM - 11 PM</p>
        </div>
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
          <ul>
            <li><a href="#home" className="hover:text-gray-400">Home</a></li>
            <li><a href="#menu" className="hover:text-gray-400">Menu</a></li>
            <li><a href="#about-us" className="hover:text-gray-400">About Us</a></li>
            <li><a href="#reservations" className="hover:text-gray-400">Reservations</a></li>
            <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="text-gray-400 hover:text-gray-300"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-gray-400 hover:text-gray-300"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-400 hover:text-gray-300"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-gray-400 hover:text-gray-300"><i className="fab fa-yelp"></i></a>
          </div>
          <form className="flex flex-col">
            <input type="email" placeholder="Subscribe to our newsletter" className="p-3 mb-2 rounded-lg" />
            <button type="submit" className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
