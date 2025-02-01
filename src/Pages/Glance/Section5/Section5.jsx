import React, { useState, useEffect } from "react";
import "./Section5.css";

const Section5 = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  // Défilement automatique toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000); // 5 secondes

    // Nettoyer l'intervalle lorsqu'on quitte le composant
    return () => clearInterval(interval);
  }, [currentIndex]); // Ne dépend que de l'index actuel pour réagir aux changements

  return (
    <div className="slider-container">
      <div className="subt">
        <div className="linelr"></div>
        <div className="nom1">Les Temps Forts de Notre Dernière Rencontre</div>
        <div className="linelr"></div>
      </div>
      <button className="slider-btn prev" onClick={handlePrev}>
        ❮
      </button>
      <div className="slider">
        {images.map((image, index) => {
          const offset = (index - currentIndex + images.length) % images.length;

          let className = "slider-item";
          if (offset === 0) className += " active";
          else if (offset === 1) className += " near-right";
          else if (offset === images.length - 1) className += " near-left";
          else if (offset === 2) className += " far-right";
          else if (offset === images.length - 2) className += " far-left";
          else className += " far";

          return (
            <div
              key={index}
              className={className}
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          );
        })}
      </div>
      <button className="slider-btn next" onClick={handleNext}>
        ❯
      </button>

      {/* Dots */}
      <div className="slider-dots1">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot1 ${currentIndex === index ? "active-dot1" : ""}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Section5;
