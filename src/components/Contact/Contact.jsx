import axios from "axios";
import { useState } from "react";

export default function Contact() {
  const [flag, setFlag] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    details: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://formspree.io/f/mwkdkywy", formData);
      alert("Email sent successfully!");
      setFlag(true);
      setFormData({ name: "", email: "", tel: "", details: "" });
    } catch (err) {
      alert("Failed to send email.");
      setFlag(false);
    }
  };

  return (
    <>
      {flag && (
        <div className="w-full p-4 bg-green-100 border border-green-300 rounded-lg mb-4 text-center text-green-800">
          <h2 className="text-xl font-semibold">Your message has been sent successfully. We will contact you soon!</h2>
        </div>
      )}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
            <p className="text-lg text-gray-600 mb-8">
              We're here to help. Fill in the form below to start a conversation with us.
            </p>
            <div className="flex items-center mb-6 text-gray-600">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                className="w-8 h-8 text-gray-500 mr-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div className="text-md font-semibold">
                ND Complex, Khanvel Char Rasta, DNH
              </div>
            </div>
            <div className="flex items-center mb-6 text-gray-600">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                className="w-8 h-8 text-gray-500 mr-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 10h14a4 4 0 010 8H3a4 4 0 010-8z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 7v12m6-12v12"
                />
              </svg>
              <div className="text-md font-semibold">
                contact@restaurant.com
              </div>
            </div>
            <div className="flex items-center mb-6 text-gray-600">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                className="w-8 h-8 text-gray-500 mr-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M7 17l5-5 5 5H7z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M7 12l5-5 5 5-5 5-5-5z"
                />
              </svg>
              <div className="text-md font-semibold">
                (123) 456-7890
              </div>
            </div>
          </div>
          <form
            className="lg:w-1/2 bg-gray-100 p-8 rounded-lg shadow-lg"
            onSubmit={handleSubmit}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Contact Form</h2>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Full Name"
                className="w-full p-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:outline-none"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email Address"
                className="w-full p-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:outline-none"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="tel" className="block text-gray-700 font-semibold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="tel"
                id="tel"
                placeholder="Your Phone Number"
                className="w-full p-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:outline-none"
                value={formData.tel}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="details" className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                name="details"
                id="details"
                placeholder="Your Message"
                className="w-full p-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:outline-none"
                value={formData.details}
                onChange={handleChange}
                rows="4"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-700 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}