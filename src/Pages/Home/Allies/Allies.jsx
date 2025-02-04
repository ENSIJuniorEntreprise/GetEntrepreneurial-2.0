import React, { useState, useEffect } from "react";
import axios from "axios";
import './Allies.css';
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import apii from "./../../../Assets/sponsors/apii.png"
import darblockchain from "./../../../Assets/sponsors/Group 19.png"
import asteel from "./../../../Assets/sponsors/asteel.png"
import digitalcollege from "./../../../Assets/sponsors/digital college.png"
import lapresse from "./../../../Assets/sponsors/lapresse.png"
import managers from "./../../../Assets/sponsors/managers logo.png"
import rnpe from "./../../../Assets/sponsors/rnpe.png"
import slr from "./../../../Assets/sponsors/slr.png"
import talys from "./../../../Assets/sponsors/talys-removebg-preview.png"

export default function Allies() {
  // const [allies, setAllies] = useState([]);
  // const baseURL = "https://get-entrepreneurial-sxzw.vercel.app";

  const allies = [
    {id:1, img:darblockchain , website:"https://darblockchain.io/"},
    {id:2, img:asteel , website:"https://asteelflash.com/fr/facility/asteelflash-la-soukra/"},
    {id:3, img:apii , website:"https://www.tunisieindustrie.nat.tn/fr/home.asp"},
    {id:4, img:digitalcollege , website:"https://digital-college.fr/"},
    {id:5, img:slr , website:"https://www.facebook.com/SoundLightRafrafi/"},
    {id:6, img:managers , website:"https://managers.tn/"},
    {id:7, img:rnpe , website:"https://www.facebook.com/RNPE.APII/?locale=fr_FR"},
    {id:8, img:lapresse , website:"https://lapresse.tn/"},
    {id:9, img:talys , website:"https://www.talys.digital/"},

  ]
  // useEffect(() => {
  //   const fetchAllies = async () => {
  //     try {
  //       const response = await axios.get(`${baseURL}/api/collab`);
  //       setAllies(response.data);
  //     } catch (error) {
  //       console.error("Error fetching allies:", error);
  //     }
  //   };

  //   fetchAllies();
  // }, []);

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
    <div className="allies">
      <div className="titleallies">NOS PARTENAIRES PRÉCIEUX</div>
      <div className="subtitle1">
        <div className="line-sub"></div>
        <div className="sub">Ensemble dans la vision, ensemble dans la réussite</div>
        <div className="line-sub"></div>
      </div>

      <div className="containerPartenaires1">
        <SlickSlider {...settings}>
          {Array.isArray(allies) && allies.map((ele) => (
            <div className="itemm" key={ele.id}>
              {ele.website && (
                <a href={`${ele.website}`} target="_blank" rel="noopener noreferrer">
                  {ele.img && (
                    <img src={`${ele.img}`} alt={`Ally ${ele.id}`} className="imagee" />
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
