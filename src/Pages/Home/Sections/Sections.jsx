import React from "react";
import './Sections.css';
import img1 from "./../../../Assets/BToB.jpg";
import img2 from "./../../../Assets/BtoC.jpg";
import img3 from "./../../../Assets/BtoS.jpg";


export default function Sections() {
  return (

    <div className="sections-container">
      <div className="title1">DÉCOUVRIR L'EXPÉRIENCE</div>
      <div className="subtitle11">
        <div className="line-sub"></div>
        <div>Découvrez l'Inconnu !</div>
        <div className="line-sub"></div>
      </div>

       <div>

        <div className="section">
          <div className="part1">
          <div className="section-title"><span className="orange">B</span>USINESS <span className="orange">TO B</span>USINESS</div>
            <div className="para1">
            L'événement propose des ateliers, des sessions de networking et des panels pour favoriser la rencontre entre startups et grandes entreprises, afin de développer des partenariats stratégiques durables. Les participants auront l'opportunité d'explorer des technologies innovantes et des solutions permettant d'améliorer l'efficacité opérationnelle. L'objectif est de permettre aux entreprises d'accéder à des innovations et de créer des collaborations qui soutiendront leur croissance .</div>
            {/* <button className="btn">Subscribe {">"}</button> */}
          </div>
          <div className="part2">
            <img src={img1} className="image1" />
          </div>
        </div>

        <div className="section2">
          <div className="part1">
            <div className="section-title"><span className="orange">B</span>USINESS <span className="orange">TO C</span>LIENT</div>
            <div className="para1">
            
Des stands d'exposition, des démonstrations en direct et des opportunités d'acquisition de clients sont proposés pour permettre aux startups et entreprises de rencontrer directement leur clientèle cible. C'est l'occasion idéale de tester vos produits, de recueillir des retours instantanés et de fidéliser de nouveaux clients. Les participants peuvent ainsi mieux comprendre les besoins du marché, ajuster leurs offres en temps réel et renforcer leur présence auprès de leur public.  
            </div>
          </div>
          <div className="part2">
            <img src={img2} className="image1" />
          </div>
        </div>


        <div className="section">
          <div className="part1">
          <div className="section-title"><span className="orange">B</span>USINESS <span className="orange">TO S</span>TAKEHOLDERS</div>
            <div className="para1">
            Des sessions privées de pitching avec des investisseurs et des tables rondes avec des décideurs politiques sont proposées, offrant ainsi aux entrepreneurs l'opportunité de se connecter avec des investisseurs, des représentants du gouvernement et des influenceurs du secteur. C'est une occasion clé pour établir des relations cruciales en matière de financement, de réglementation et de croissance. Ces échanges permettent d'influencer les futurs cadres légaux .</div>
          </div>
          <div className="part2">
            <img src={img3} className="image1" />
          </div>
        </div>
      </div> 

    </div>
  );
}
