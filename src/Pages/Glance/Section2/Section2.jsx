import React from "react";
import './Section2.css';
import Chiffre1 from './chiffre1.jsx'

export default function Section2() {
  return (
    <div className="EJE-container1">
      <div className="EJE1">
        <div className="EJE-Title-Part11">
          <div className="title11">ÉDITION PRÉCÉDENTE</div>
          <div className="subtitle11">
            <div className="line-sub11"></div>
            <div>Là Où Tout a Commencé</div>
            <div className="line-sub11"></div>
          </div>
        </div>
      </div>

      <div className="whoWeAre-section11">
        <div className="partie11">
          <div><span className="orange"> La première édition de Get Entrepreneurial, </span> tenue le 24 janvier 2024, à l'UTICA, représente un tournant majeur pour l'ENSI Junior Entreprise.
          <br />En mettant en lumière notre engagement pour l'<span className="orange">innovation </span>et l'<span className="orange">excellence</span>, cet événement a offert une plateforme précieuse ou les startups, incubateurs et entreprises se sont réunis pour échanger et collaborer.
          <br></br>
          L'ENSI Junior Entreprise est fière d'avoir été à l'initiative de cette journée, qui a permis à de jeunes entrepreneurs et porteurs de projets de présenter leurs idées innovantes à un public d'experts, ouvrant ainsi la voie à de nouvelles opportunités et collaborations stratégiques.
          Cet événement reflète notre volonté d'être un acteur clé dans la promotion de l’entrepreneuriale.</div>
        </div>
        
        
        <div className="part222">

          <div className="container-chiffre1 ch1">
            <div className="chiffre1">+<Chiffre1 number="11" adding="" /></div>
            <div className="label1">Sponsors</div>
          </div>

          <div className="container-chiffre1 ch2">
            <div className="chiffre1">+<Chiffre1 number="86" adding="" />%</div>
            <div className="label1">Taux de Satisfaction</div>
          </div>

          <div className="container-chiffre1 ch3">
            <div className="chiffre1">+<Chiffre1 number="500" adding="" /></div>
            <div className="label1">Participants</div>
          </div>


        </div>
      </div>


    </div>
  );
}
