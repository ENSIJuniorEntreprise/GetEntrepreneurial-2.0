import React, { useState } from "react";
import "./Section3.css";
import image from "./../../../Assets/junior.jpg"

export default function Section3() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="section27-container">
      {/* Lignes décoratives */}
      <div className="horizontal-line top-line"></div>
      <div className="horizontal-line bottom-line"></div>
      <div className="vertical-line left-line"></div>
      <div className="vertical-line right-line"></div>

      {/* Conteneur de la vidéo avec image */}
      <div className="video-wrapper">
        {!isPlaying ? (
          <div className="video-thumbnail" onClick={handlePlay}>
            <img
              src={image} // Remplace par l'image capturée
              alt="Thumbnail"
              className="thumbnail-image"
              width="100%"
              height="auto"
            />
            <button className="play-button">▶</button>
          </div>
        ) : (
          <iframe
            className="video-content"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/nbpSj222j0s?autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
}
