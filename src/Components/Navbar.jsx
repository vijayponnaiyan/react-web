import React, { useState } from 'react';
import img from '../docs/fool.jpg'; // Ensure the path is correct
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [login, setLogin] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const card = useSelector((state) => state.card);

  return (
    <header className="bg-blue-700 text-white">
    <nav className="container mx-auto p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/">
          <img src={img} alt="Logo" className="h-12 w-12 ml-3" />
        </Link>
      </div>
      <div className="hidden md:flex space-x-8">
        <Link to="/home" className="hover:text-yellow-300 transition duration-300">
          Home
        </Link>
        <Link to="/about" className="hover:text-yellow-300 transition duration-300">
          About
        </Link>
        <Link to="/contact" className="hover:text-yellow-300 transition duration-300">
          Contact
        </Link>
        <Link to="/card" className="hover:text-yellow-300 transition duration-300">
          Card ({Array.isArray(card) ? card.length : 0})
        </Link>
      </div>
      <div className="hidden md:block">
        {login ? (
          <button
            type="button"
            className="text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 transition duration-300"
            onClick={() => setLogin(false)}
          >
            Logout
          </button>
        ) : (
          <button
            type="button"
            className="text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 transition duration-300"
            onClick={() => setLogin(true)}
          >
            Login
          </button>
        )}
      </div>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white hover:text-yellow-300 focus:outline-none transition duration-300"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </nav>
    {isMenuOpen && (
      <div className="md:hidden bg-blue-700 text-white">
        <ul className="space-y-4 p-4">
          <Link to="/home" className="block hover:text-yellow-300 transition duration-300">
            Home
          </Link>
          <Link to="/about" className="block hover:text-yellow-300 transition duration-300">
            About
          </Link>
          <Link to="/contact" className="block hover:text-yellow-300 transition duration-300">
            Contact
          </Link>
          <Link to="/card" className="block hover:text-yellow-300 transition duration-300">
            Card ({Array.isArray(card) ? card.length : 0})
          </Link>
          {login ? (
            <button
              type="button"
              className="text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 w-full transition duration-300"
              onClick={() => setLogin(false)}
            >
              Logout
            </button>
          ) : (
            <button
              type="button"
              className="text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 w-full transition duration-300"
              onClick={() => setLogin(true)}
            >
              Login
            </button>
          )}
        </ul>
      </div>
    )}
  </header>
  
  );
}
