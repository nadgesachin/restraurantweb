import React from 'react';

const AboutUs = () => {
  return (
    <section id="about-us" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12">About Us</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3">
            <img src="/path-to-restaurant-image.jpg" alt="Restaurant Interior" className="w-full h-auto rounded-lg shadow-lg mb-8 md:mb-0" />
          </div>
          <div className="md:w-2/3 md:ml-12">
            <h3 className="text-4xl font-semibold mb-4">Our Story</h3>
            <p className="mb-6">Founded in 1990, our restaurant has been serving the community with a passion for culinary excellence. Our menu is inspired by traditional recipes passed down through generations, infused with modern twists to delight every palate.</p>
            <p className="mb-6">Our commitment to quality and customer satisfaction has made us a local favorite. We take pride in using only the freshest ingredients, sourced from local farmers and artisans, to ensure that every dish is not only delicious but also supports our community.</p>
            <h3 className="text-3xl font-semibold mb-4">Meet Our Chef</h3>
            <p className="mb-4">John Doe, our head chef, has over 20 years of experience in the culinary arts. He combines his expertise with a love for fresh ingredients to create dishes that are both visually stunning and incredibly flavorful. John is dedicated to crafting a menu that reflects our restaurant's commitment to quality and innovation.</p>
            <p className="mb-6">Our restaurant offers a warm, welcoming atmosphere perfect for family gatherings, romantic dinners, and celebrations. Whether you're here for a casual lunch or a special occasion, we strive to make every visit memorable.</p>
            <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
            <p>We believe in sustainability, community, and exceptional service. Our team is dedicated to providing a dining experience that exceeds expectations, from our carefully curated menu to our attentive service. Join us and experience why we're more than just a restaurant; we're a community gathering place.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
