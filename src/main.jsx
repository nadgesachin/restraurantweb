import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import ProductDetails from './components/Product/ProductDetails';
import ShoppingCart from './components/Product/ShoppingCart';
import CheckoutProcess from './components/Product/CheckoutProcess';
import UserAccountDashboard from './components/User/UserAccountDashboard';
import NotFound from './components/NotFound/NotFound';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Specials from './components/Specials/Specials'; // Ensure to add Specials component
import Reservations from './components/Reservations/Reservations'; // Ensure to add Reservations component
import Gallery from './components/Gallery/Gallery'; // Ensure to add Gallery component
import Testimonials from './components/Testimonials/Testimonials'; // Ensure to add Testimonials component
import Events from './components/Events/Events'; // Ensure to add Events component
import Blog from './components/Blog/Blog'; // Ensure to add Blog component
import OnlineOrdering from './components/OnlineOrdering/OnlineOrdering'; // Ensure to add OnlineOrdering component
import HeroSection from './components/Section/HeroSection';
import Menu from './components/Home/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HeroSection />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/specials" element={<Specials />} />
      <Route path="/reservations" element={<Reservations />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/events" element={<Events />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/order" element={<OnlineOrdering />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<ShoppingCart />} />
      <Route path="/checkout" element={<CheckoutProcess />} />
      <Route path="/account" element={<UserAccountDashboard />} />
      <Route path="/*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
