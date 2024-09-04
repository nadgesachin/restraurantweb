import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      title: '5 Tips for Cooking the Perfect Steak',
      date: 'September 10, 2024',
      summary: 'Learn the secrets to cooking the perfect steak every time.',
      image: '/path-to-blog-post-1.jpg',
      link: '#',
    },
    {
      title: 'The Best Wines to Pair with Seafood',
      date: 'August 20, 2024',
      summary: 'Discover the best wine pairings for your favorite seafood dishes.',
      image: '/path-to-blog-post-2.jpg',
      link: '#',
    },
    // Add more blog posts
  ];

  return (
    <section id="blog" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-3xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-700 mb-4">{post.summary}</p>
              <a href={post.link} className="text-blue-500 hover:underline">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
