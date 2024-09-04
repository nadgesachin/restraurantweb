import React from 'react';

const Menu = () => {
  const menuItems = [
    {
      category: 'Appetizers',
      items: [
        {
          name: 'Bruschetta',
          description: 'Grilled bread topped with diced tomatoes, garlic, basil, and a drizzle of balsamic glaze.',
          price: '$8',
          dietary: 'Vegan',
          image: '/images/bruschetta.jpg',
        },
        {
          name: 'Stuffed Mushrooms',
          description: 'Mushrooms filled with a blend of cheeses, herbs, and breadcrumbs, baked until golden.',
          price: '$10',
          dietary: 'Vegetarian',
          image: '/images/stuffed-mushrooms.jpg',
        },
        {
          name: 'Calamari',
          description: 'Crispy fried calamari served with a side of marinara sauce and lemon wedges.',
          price: '$12',
          dietary: 'Seafood',
          image: '/images/calamari.jpg',
        },
      ],
    },
    {
      category: 'Main Courses',
      items: [
        {
          name: 'Grilled Chicken',
          description: 'Succulent chicken breast marinated and grilled to perfection, served with a side of roasted vegetables and mashed potatoes.',
          price: '$15',
          dietary: 'Gluten-Free',
          image: '/images/grilled-chicken.jpg',
        },
        {
          name: 'Spaghetti Carbonara',
          description: 'Classic Italian pasta dish made with eggs, cheese, pancetta, and pepper, creating a creamy sauce.',
          price: '$14',
          dietary: '',
          image: '/images/spaghetti-carbonara.jpg',
        },
        {
          name: 'Vegetarian Lasagna',
          description: 'Layers of pasta, ricotta cheese, spinach, and marinara sauce, baked until bubbly and golden.',
          price: '$13',
          dietary: 'Vegetarian',
          image: '/images/vegetarian-lasagna.jpg',
        },
      ],
    },
    {
      category: 'Desserts',
      items: [
        {
          name: 'Tiramisu',
          description: 'Classic Italian dessert with layers of coffee-soaked ladyfingers, mascarpone cream, and cocoa powder.',
          price: '$7',
          dietary: '',
          image: '/images/tiramisu.jpg',
        },
        {
          name: 'Cheesecake',
          description: 'Rich and creamy cheesecake with a graham cracker crust, served with a strawberry compote.',
          price: '$8',
          dietary: '',
          image: '/images/cheesecake.jpg',
        },
      ],
    },
    {
      category: 'Drinks',
      items: [
        {
          name: 'Red Wine',
          description: 'A glass of fine red wine, carefully selected to complement our dishes.',
          price: '$9',
          dietary: 'Alcoholic',
          image: '/images/red-wine.jpg',
        },
        {
          name: 'Craft Beer',
          description: 'A selection of locally brewed craft beers, varying in flavor and style.',
          price: '$7',
          dietary: 'Alcoholic',
          image: '/images/craft-beer.jpg',
        },
        {
          name: 'Fresh Lemonade',
          description: 'Refreshing lemonade made from freshly squeezed lemons, served chilled.',
          price: '$5',
          dietary: 'Non-Alcoholic',
          image: '/images/fresh-lemonade.jpg',
        },
      ],
    },
  ];

  return (
    <section id="menu" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12">Our Menu</h2>
        {menuItems.map((category, index) => (
          <div key={index} className="mb-12">
            <h3 className="text-3xl font-semibold mb-6">{category.category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-start">
                  {item.image && <img src={item.image} alt={item.name} className="w-full h-40 object-cover mb-4 rounded-md" />}
                  <h4 className="text-2xl font-semibold mb-2">{item.name}</h4>
                  <p className="text-gray-700 mb-2">{item.description}</p>
                  <p className="text-red-500 font-bold mb-2">{item.price}</p>
                  {item.dietary && <span className="text-green-500 font-semibold">{item.dietary}</span>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
