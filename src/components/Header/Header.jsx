
import { FaShoppingCart, FaHeart, FaUser, FaSearch,FaFacebookF,FaTwitter,FaInstagram,FaYelp } from 'react-icons/fa';
import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import { useContext } from 'react';

export default function Header() {

    const userContext = useContext(UserContext);
    const navigate = useNavigate();

   
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    function toggleMobileMenu() {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    function logoutHandler() {
        userContext.setUser(userContext.user = null);
        navigate("/");
    }

    return (
        <header className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
            <nav className="container flex mx-auto max-w-screen-xl">
                <div className="flex flex-wrap justify-between items-center w-full">
                <Link to="/" className="flex items-center">
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Restraurant Website</span>
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <button
                            onClick={toggleMobileMenu}
                            type="button"
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <svg
                                className={`w-6 h-6 ${isMobileMenuOpen ? 'hidden' : ''}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                            </svg>
                            <svg
                                className={`w-6 h-6 ${isMobileMenuOpen ? '' : 'hidden'}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    
                </div>
                <div className={`lg:flex flex-grow justify-end ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu-2">
                        
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                          <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Home</NavLink>
                        </li>
                        <li>
                          <NavLink to="/menu" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Menu</NavLink>
                        </li>
                        <li>
                          <NavLink to="/reservations" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Reservations</NavLink>
                        </li>
                        <li>
                          <NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">About</NavLink>
                        </li>
                        <li>
                          <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</NavLink>
                        </li>
                        </ul>
                        <div className="flex items-center space-x-4 lg:order-2">
                        <div className="flex items-center border rounded-full px-2 py-1 lg:ml-4">
                          <FaSearch className="text-gray-500 mr-2" />
                          <input
                            type="text"
                            placeholder="Search products..."
                            className="outline-none"
                          />
                        </div>
                        <div className="hidden md:flex space-x-4">
                          <a href="#" className="text-gray-600 hover:text-gray-800"><FaFacebookF /></a>
                          <a href="#" className="text-gray-600 hover:text-gray-800"><FaTwitter /></a>
                          <a href="#" className="text-gray-600 hover:text-gray-800"><FaInstagram /></a>
                          <a href="#" className="text-gray-600 hover:text-gray-800"><FaYelp /></a>
                        </div>

                        {/* <select className="border rounded p-1 lg:ml-4">
                          <option value="en">EN</option>
                          <option value="es">ES</option>
                        </select> */}
                      </div>
                    </div>
            </nav>
        </header>
    );
}
