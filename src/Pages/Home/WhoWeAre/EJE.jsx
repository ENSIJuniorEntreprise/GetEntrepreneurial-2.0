import React from "react";
import './EJE.css';
import logoo from "./../../../Assets/Logoo.png"
import Chiffre from './chiffre'
import ImageSlider from "./ImageSlider";
import img1 from "./../../../Assets/slider1.jpg"
import img2 from "./../../../Assets/slider2.jpg"
import img3 from "./../../../Assets/slider3.jpg"


export default function EJE() {
  let slides = [img1, img2, img3]


  return (
    <div className="EJE-container">
      <img src={logoo} className="logooo" />
      <div className="EJE">
        <img src={logoo} className="logoo" />
        <div className="EJE-Title-Part">
          <div className="title">QUI SOMMES-NOUS ?</div>
          <div className="subtitle">
            <div className="line-sub"></div>
            <div>Découvrez Notre Histoire</div>
            <div className="line-sub"></div>
          </div>
        </div>
      </div>

      <div className="whoWeAre-section1">
        <div className="partie1">
          <div><span className="orange"> Ensi Junior Enterprise, </span> fondée en 2006, est une association étudiante affiliée à l'École Nationale des Sciences de l'Informatique (ENSI). Notre mission est d'introduire les étudiants tunisiens à la vie professionnelle à travers des activités axées sur trois principaux piliers : la formation, les événements et le développement de projets TIC.

          <br></br>
          De plus, nous assumons activement la responsabilité de promouvoir un esprit entrepreneurial au sein de l'écosystème tunisien, grâce à nos activités, notamment les événements qui renforcent le lien entre les étudiants et les entreprises.
          </div>
        </div>
        <div className="part2">

          <div className="container-chiffre ch1">
            <div className="chiffre">+<Chiffre number="19" adding="" /></div>
            <div className="label">Ans</div>
          </div>

          <div className="container-chiffre ch2">
            <div className="chiffre">+<Chiffre number="25" adding="" /></div>
            <div className="label">Partenaires</div>
          </div>

          <div className="container-chiffre ch3">
            <div className="chiffre">+<Chiffre number="28" adding="" /></div>
            <div className="label">Événements</div>
          </div>

          <div className="container-chiffre ch4">
            <div className="chiffre">+<Chiffre number="82" adding="" /></div>
            <div className="label">Projets</div>
          </div>

        </div>
      </div>
      <div className="containerStyles0">
        <div className="containerStyles">
          <ImageSlider slides={slides} />
        </div>
      </div>


    </div>
  );
}
