import React, { useState, useEffect } from "react";
import "./ImageSlider.css";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const newIndex = (currentIndex + 1) % slides.length;
      setCurrentIndex(newIndex);
    }, 2500);

    return () => clearInterval(timer);
  }, [currentIndex, slides]);

  return (
    <div className="sliderStyles">
      <img
        src={slides[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="slideStylesWidthBackground"
      />
      <div className="dotsContainerStyles">
        {slides.map((slide, slideIndex) => (
          <div
            className={`dotStyle ${slideIndex === currentIndex ? 'current' : ''}`}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
