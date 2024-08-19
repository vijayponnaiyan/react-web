import React, { useState, useEffect } from 'react';

const Carousel = ({ images, autoSlideInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [autoSlideInterval, nextSlide]);

  return (
    <div className="relative p-5">
      <div className="carousel-wrapper overflow-hidden">
        <div
          className="carousel-inner flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <div className="carousel-item min-w-full flex-shrink-0" key={index}>
              <img src={img} alt={`Slide ${index + 1}`} className="w-full h-auto" />
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
        onClick={prevSlide}
      >
        ‹
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
        onClick={nextSlide}
      >
        ›
      </button>
    </div>
  );
};

export default Carousel;
