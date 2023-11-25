import React, { useState, useEffect } from 'react';
import img1 from '../Assests/banner_mens.png'
import img2 from '../Assests/banner_women.png'
import img3 from '../Assests/banner_kids.png'
import './Hero.css'

const ImageCarousel = () => {
  const images = [img1, img2, img3];
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  // for making image previous

  // const prevImage = () => {
  //   setCurrentImage((currentImage - 1 + images.length) % images.length);   
  // };

  useEffect(() => {
    const interval = setInterval(() => { nextImage(); }, 2000); // Change the interval time here (in milliseconds)
    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div className="image-carousel">
      <div className="carousel-container">
        <img src={images[currentImage]} alt="" width="400" height="300" />
      </div>
    </div>
  );
};

export default ImageCarousel;
