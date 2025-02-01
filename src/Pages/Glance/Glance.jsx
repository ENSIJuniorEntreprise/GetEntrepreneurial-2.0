import React from "react";
import './Glance.css'; 
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";
import Section4 from "./Section4/Section4";
import Section5 from "./Section5/Section5";
import Section6 from "./Section6/Section6";
import img1 from "./../../Assets/kol.jpg";
import img2 from "./../../Assets/BE23-24.jpg";
import img3 from "./../../Assets/public.jpg";
import img4 from "./../../Assets/managers.jpg";
import img5 from "./../../Assets/junior.jpg";
export default function Glance() {
  const images = [img1, img2, img3, img4 ,img5];
  return (
    <div >
      <Section1></Section1> 
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
      <Section5 images={images}></Section5>
      <Section6></Section6>
    </div>
  );
}