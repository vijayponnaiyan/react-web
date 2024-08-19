import React, { useState, useEffect } from 'react';
import Reastruncard from '../Components/Reastruncard'; 
import { Link } from 'react-router-dom';
import Carousel from '../Components/Carousel';
const ProductList = () => {
  const [searchtext, setSearchText] = useState(""); 
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState([]);

  const images = [
    'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/af1914220f55ee30.jpg?q=20',
    'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/a81653ffec97986c.jpg?q=20',
    'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/89f8eeb28f03fe04.jpg?q=20',
    // Add more image URLs as needed
  ];


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data); // Initialize filteredProducts with all products
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchProducts();
  }, []);

  const handelsearch = (e) => {
    e.preventDefault();
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(searchtext.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <>
            
    <div className="App">
      <Carousel 
      images={images} />
    </div>

      <div>

      <form className="max-w-lg mx-auto mt-6" onSubmit={handelsearch}>
  <label 
    htmlFor="default-search" 
    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
  >
    Search
  </label>
  <div className="relative">
    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
      <svg 
        className="w-5 h-5 text-gray-500 dark:text-gray-400" 
        aria-hidden="true" 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 20 20"
      >
        <path 
          stroke="currentColor" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
        />
      </svg>
    </div>
    <input 
      type="search" 
      id="default-search" 
      className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
      placeholder="Search..."
      value={searchtext}
      onChange={(e) => setSearchText(e.target.value)}
      required 
    />
    <button 
      type="submit" 
      className="text-black   bg-blue-800 absolute right-3 bottom-3 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 transition duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1"
    >
      Search
    </button>
  </div>
</form>
    
      </div>       

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  p-10">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Link to={`/Reastrand/${product.id}`} key={product.id}>
            <div>
              <Reastruncard 
                image={product.image}  
                title={product.title}   
                price={product.price}
                description={product.description}
                rating={product.rating}
              />
            </div>
          </Link>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default ProductList;
