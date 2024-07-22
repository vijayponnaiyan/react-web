import React, { useState } from 'react';
import img from '../public/fool.jpg'; // Ensure the path is correct
import { Link } from 'react-router-dom';
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [login, setLogin] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-yellow-400 text-blue-800">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center">
        <Link to="/Home">
        <img src={img} alt="Logo" className="h-16 w-16 ml-3" />
      </Link>{/* Adjust the size as needed */}
        
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-4">
         <Link  to="/home"  >  
          <li className="hover:text-gray-400"><a href="#home">Home</a></li> 
         </Link>  
        <Link  to="/about"  >
        <li className="hover:text-gray-400"><a href="#about">About</a></li>
        </Link>
        <Link  to="/contact"  >
        <li className="hover:text-gray-400"><a href="#contact">Contact</a></li>
        </Link>
        <Link  to="/card"  >
        <li className="hover:text-gray-400"><a href="#card">Card</a></li>  
        </Link>
          </ul>
        </div>
        <div className="hidden md:block">
        {login ? (
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => setLogin(false)}  // Correctly update the state
        >
          Logout
        </button>
      ) : (
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => setLogin(true)}  // Correctly update the state
        >
          Login
        </button>
      )}
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-400 hover:text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-yellow-400 text-blue-800">
          <ul className="space-y-4 p-4">
          <Link  to="/home"  >  
          <li className="hover:text-gray-400"><a href="#home">Home</a></li> 
         </Link>  
        <Link  to="/about"  >
        <li className="hover:text-gray-400"><a href="#about">About</a></li>
        </Link>
        <Link  to="/contact"  >
        <li className="hover:text-gray-400"><a href="#contact">Contact</a></li>
        </Link>
        <Link  to="/card"  >
        <li className="hover:text-gray-400"><a href="#card">Card</a></li>  
        </Link>
            {login ? (
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => setLogin(false)}  // Correctly update the state
        >
          Logout
        </button>
      ) : (
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => setLogin(true)}  // Correctly update the state
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
