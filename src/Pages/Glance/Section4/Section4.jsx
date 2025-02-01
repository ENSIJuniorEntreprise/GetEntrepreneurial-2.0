import React, { useState, useEffect } from "react";
import axios from "axios";
import './Section4.css'
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Section4() {
  const [allies, setAllies] = useState([]);
  const baseURL = "https://get-entrepreneurial-sxzw.vercel.app";


  useEffect(() => {
    // Fetch allies from the backend when the component mounts
    const fetchAllies = async () => {
      try {
        const response = await axios.get(`${baseURL}/api/collab`);
        setAllies(response.data);
      } catch (error) {
        console.error("Error fetching allies:", error);
      }
    };

    fetchAllies();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    className: `testimonial-content--3 testimonial-grid`,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="allies1">
      <div className="title11">NOS PRÉCIEUX ALLIÉS</div>
      <div className="subtitle11">
        <div className="line-subb"></div>
        <div className="subb">Visions Partagées, Succès Partagé</div>
        <div className="line-subb"></div>
      </div>

      <div className="containerPartenaires1">
        <SlickSlider {...settings}>
        {Array.isArray(allies) && allies.map((ele) => (
  <div className="itemm" key={ele.id}>
    {ele.website && (
      <a href={`${ele.website}`} target="_blank" rel="noopener noreferrer">
        {ele.img && (
          <img src={`${baseURL}/api/collab/collabImg/${ele.img}`} alt={`Ally ${ele.id}`} className="imagee" />
        )}
      </a>
    )}
  </div>
))}
        </SlickSlider>
      </div>
    </div>
  );
}
