import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo';
import { FaBars, FaSearch } from 'react-icons/fa';
import { MdOutlineShoppingCart } from 'react-icons/md'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    // Function to toggle the hamburger menu on mobile
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
          const navbar = document.querySelector("nav");
          if (window.scrollY > 50) {
            navbar.classList.add("bg-blue-900", "shadow-md");
          } else {
            navbar.classList.remove("bg-blue-900", "shadow-md");
          }
        };
      
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    return (
      <nav className="bg-gradient-to-r from-teal-800 via-teal-500 to-teal-900 backdrop-blur-lg shadow-lg w-full fixed top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link to="/">
                <Logo/>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-10 text-lg font-serif">
                <NavLink to="/" className={({ isActive }) => `${isActive ? "text-indigo-800" : "text-white"} transition-colors duration-300 hover:text-indigo-800` }>
                  Home
                </NavLink>
                <NavLink to="/shop" className={({ isActive }) => `${isActive ? "text-indigo-800" : "text-white"} transition-colors duration-300 hover:text-indigo-800` }>
                  Shop
                </NavLink>
                <NavLink to="/offers" className={({ isActive }) => `${isActive ? "text-indigo-800" : "text-white"} transition-colors duration-300 hover:text-indigo-800` }>
                  Offers
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => `${isActive ? "text-indigo-800" : "text-white"} transition-colors duration-300 hover:text-indigo-800` }>
                  Contact Us
                </NavLink>
                
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-10">
            <div className="relative flex items-center bg-gray-100 rounded-full pr-3">
              <input
                type="text"
                className="px-3 py-2 bg-gray-100 rounded-full text-sm w-50 focus:outline-none
                { width: 100%; } .transition-all { transition: all 0.3s ease-in-out; }"
                placeholder="Search products..."
                />
                <FaSearch className='cursor-pointer'/>
            </div>
            <Link to="/signup" className="text-white">
              {/* <img 
                src="https://cdn-icons-png.flaticon.com/128/149/149071.png" 
                className='w-12'
                alt="" /> */}
                <button type="button" className='bg-teal-600 font-serif rounded-3xl py-1.5 px-5 cursor-pointer'>Sign up</button>
            </Link>
            <Link to="/cart" className="text-white relative">
              <MdOutlineShoppingCart size={40}/>
              <span className='absolute -top-2 -right-1 py-0.3 px-1.5 bg-teal-400 rounded-full'>0</span>
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-900 focus:outline-none hover:text-teal-600"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" className="block text-gray-900 active:text-emerald-700 px-3 py-2 rounded-md text-base font-medium">
              Home
            </NavLink>
            <Link to="/" className="block text-gray-900 hover:text-teal-600 px-3 py-2 rounded-md text-base font-medium">
              Shop
            </Link>
            <Link to="/" className="block text-gray-900 hover:text-teal-600 px-3 py-2 rounded-md text-base font-medium">
              Offers
            </Link>
            <Link to="/" className="block text-gray-900 hover:text-teal-600 px-3 py-2 rounded-md text-base font-medium">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;