
import React, { useState } from 'react';
import './Hero.css'
import img1 from  '../Assests/banner_mens.png'
import img2 from '../Assests/banner_women.png'
import img3 from '../Assests/banner_kids.png' 
import img4 from '../Assests/Try some New.png' 


const ImageCarousel = () => {
  const images = [img1, img2, img3,img4];
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return (
    <div className="image-carousel">
      <div className="carousel-container">
        <img src={images[currentImage]} alt=" " width="400" height="300" />
      </div>
      <div className="controls">
        <button onClick={prevImage}>Previous</button>
        <button onClick={nextImage}>Next</button>
      </div>
    </div>
  );
};

export default ImageCarousel;
