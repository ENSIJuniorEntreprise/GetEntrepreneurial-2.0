import React from "react";
import "./Section3.css";
import video from './../../../Assets/juniorentreprise.mp4'

export default function Section3() {
  return (
    <div className="section27-container">
      {/* Lignes décoratives orange */}
      <div className="horizontal-line top-line"></div>
      <div className="horizontal-line bottom-line"></div>
      <div className="vertical-line left-line"></div>
      <div className="vertical-line right-line"></div>

      {/* Conteneur de la vidéo */}
      <div className="video-wrapper">
        <video
          src={video}
          controls
          className="video-content"
        ></video>
      </div>
    </div>
  );
}
