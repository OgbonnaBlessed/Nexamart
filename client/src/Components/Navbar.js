import React, { useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo';
import { FaBars, FaEnvelope, FaEye, FaHome, FaSearch, FaShoppingBag, FaTag } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef(null);
  
    // Function to toggle the hamburger menu on mobile
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    useEffect(() => {
      const closeSidebar = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      }

      document.addEventListener('mousedown', closeSidebar);

      return () => {
        document.removeEventListener('mousedown', closeSidebar);
      }
    }, []);
  
    return (
      <nav className="bg-gradient-to-r from-teal-800 via-teal-500 to-teal-900 backdrop-blur-lg shadow-lg w-full fixed top-0 z-50" ref={sidebarRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link to="/">
                <Logo/>
              </Link>
            </div>
            <div className="hidden lgx:block">
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
          <div className="hidden lgx:flex items-center md:space-x-1 lg:space-x-10">
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
              Cart 
              <span>  (0)</span>
            </Link>
            <Link to="/watchlist" className="text-white relative">
              <FaEye size={30}/>
            </Link>
          </div>
          <div className="lgx:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-900 focus:outline-none"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <aside id='sidebar' className={`absolute top-[4rem] left-0 w-64 h-[100vh] bg-gradient-to-b from-teal-800 via-teal-500 to-teal-900  text-white lgx:hidden transition-all duration-700 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <nav className='flex flex-col space-y-8 mt-4 p-4 justify-center items-center'>
              <Link 
                to="/signup" 
                className="text-white"
                onClick={toggleMenu}>
              {/* <img 
                src="https://cdn-icons-png.flaticon.com/128/149/149071.png" 
                className='w-12'
                alt="" /> */}
                <button type="button" className='bg-teal-600 font-serif rounded-3xl py-1.5 px-5 cursor-pointer'>Sign up</button>
              </Link>
              <Link 
                to="/cart" 
                className="text-white relative"
                onClick={toggleMenu}>
                {/* <MdOutlineShoppingCart size={40}/>
                <span className='absolute -top-2 -right-1 py-0.3 px-1.5 bg-teal-400 rounded-full'>0</span> */}
                Cart 
                <span> (0)</span>
              </Link>
              <Link
                to="/watchlist"
                className='text-white relative'
                onClick={toggleMenu}>
                  <FaEye size={30}/>
              </Link>
              <div className='flex flex-col space-y-8 mt-4 p-4 border border-x-0 border-y-gray-400 w-[100%]'>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => `${isActive ? "text-indigo-800" : "text-white"} transition-colors duration-300 hover:text-indigo-800 font-serif flex items-center gap-2` }
                  onClick={toggleMenu}>
                  <FaHome className='text-gray-800'/> Home
                </NavLink>
                <NavLink 
                  to="/shop" 
                  className={({ isActive }) => `${isActive ? "text-indigo-800" : "text-white"} transition-colors duration-300 hover:text-indigo-800 font-serif flex items-center gap-2` }
                  onClick={toggleMenu}>
                  <FaShoppingBag className='text-gray-800' /> Shop
                </NavLink>
                <NavLink 
                  to="/offers" 
                  className={({ isActive }) => `${isActive ? "text-indigo-800" : "text-white"} transition-colors duration-300 hover:text-indigo-800 font-serif flex items-center gap-2` }
                  onClick={toggleMenu}>
                  <FaTag className='text-gray-800'/> Offers
                </NavLink>
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => `${isActive ? "text-indigo-800" : "text-white"} transition-colors duration-300 hover:text-indigo-800 font-serif flex items-center gap-2` }
                  onClick={toggleMenu}>
                  <FaEnvelope className='text-gray-800'/> Contact Us
                </NavLink>
              </div>
              <div className="relative flex items-center bg-gray-100 rounded-full pr-3 text-black">
                <input
                  type="text"
                  className="px-3 py-2 bg-gray-100 rounded-full text-sm w-50 focus:outline-none
                  { width: 100%; } .transition-all { transition: all 0.3s ease-in-out; }"
                  placeholder="Search products..."
                  />
                  <FaSearch 
                    className='cursor-pointer'
                    onClick={toggleMenu}/>
              </div>
          </nav>
      </aside>
    </nav>
  );
};

export default Navbar;