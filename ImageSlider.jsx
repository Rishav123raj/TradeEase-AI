import React, { useState, useEffect } from 'react';
import './ImageSlider.css'; 
//import images for image-slider
import image1 from '../../Assets/image-slider/img1.jpg';
import image2 from '../../Assets/image-slider/img2.jpg';
import image3 from '../../Assets/image-slider/img3.jpg';

const imagesArray = [image1, image2, image3];

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % imagesArray.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []); // Removed unnecessary dependency

  const goToImage = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="image-slider">
      <div className="slider-container">
        {imagesArray.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`slider-image ${index === currentImage ? 'active' : ''}`}
          />
        ))}
      </div>
      <div className="indicators">
        {imagesArray.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentImage ? 'active' : ''}`}
            onClick={() => goToImage(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
