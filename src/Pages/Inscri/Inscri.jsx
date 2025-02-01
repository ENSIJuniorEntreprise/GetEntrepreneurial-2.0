import React, { useState, useRef } from "react";
import part from './../../Assets/image4.jpg';
import exh from './../../Assets/exhibition.jpg';
import { Link } from 'react-router-dom';

import './Inscri.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faEnvelope, faPhone, faCalendarDays, faFileAlt, faUpload, faVenusMars, faLocationDot, faUser, faBriefcase, faStar, faBuildingColumns, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

function Inscri() {
  return (
   
      <div className="container003">
        <div className="container0003">
        <div className="container04">
             <div className="sectionn1">
                      <div className="partt1">
                      <div className="sectionn-title"><span className="orangee">P</span>ARTICIPANT </div>
                        <div className="paraa1">
                        L'événement propose des ateliers, des sessions de networking et des panels . </div>
                        <button className="btnn"><Link to="/Register1" > S'INSCRIRE {">"}</Link></button> 
                      </div>
                      <div className="part2">
                        <img src={part} className="image11" />
                      </div>
            </div>
            <div className="sectionn2">
                      <div className="part2">
                        <img src={exh} className="image11" />
                      </div>
                      <div className="partt1">
                        <div className="sectionn-title"><span className="orange">E</span>XPOSANT</div>
                        <div className="paraa1">Des stands d'exposition, des démonstrations en direct et des opportunités d'acquisition de clients.
                        </div>
                        <button className="btnn"><Link to="/Register2"> S'INSCRIRE {">"}</Link></button> 
                      </div>
                      
                    </div>
        </div>
      </div>
      </div>
  );
}

export default Inscri;



