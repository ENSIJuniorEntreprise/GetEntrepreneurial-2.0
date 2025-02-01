import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import image2 from './../../Assets/croissance orange.png';
import image1 from './../../Assets/balance orange.png';
import "./Program.css";
import tarek from './../../Assets/tarek.png';
import sawssen from './../../Assets/sawssen.png';
import razi from './../../Assets/razi.png';
import mezghich from './../../Assets/mezghich.png';
import maghraoui from './../../Assets/maghraoui.png';
import benaissa from './../../Assets/Fatenbenaissa.png';
import chirine from './../../Assets/chirine.png';
import louati from './../../Assets/imenlouati.png';
import karim from './../../Assets/karim ben said.png'
import haifa from './../../Assets/workshopHAIFA.png'
import ridha from './../../Assets/ridha gouiaa.png';
import mounira from './../../Assets/mounira.png';
import fatma from './../../Assets/fatma.png';
import hamed from './../../Assets/hamed.png';
import hamedmod from './../../Assets/hamed mod.png';
import nour from './../../Assets/Nourbenlazrak.png';


function Program() {
    const [selectedTab, setSelectedTab] = useState("Theme"); // Initial state
    const location = useLocation();

    // Gérer les clics sur les onglets
    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const section = queryParams.get("section");

        // Mettre à jour l'onglet sélectionné si un paramètre de section est présent
        if (section) {
            setSelectedTab(section);
        }
    }, [location]);

    return (
        <div className="body-timeline">
            <div className="container011">
                <div className="container2">
                    <div className='container2back'>
                    <div className="text-centered-agenda2">À propos de l'Événement</div>
                    <div className="subtitle-pgm">
                        <div className="line-sub-pgm"></div>
                        <div className='abouttheme'>Carte vers l'Excellence Entrepreneuriale !</div>
                        <div className="line-sub-pgm"></div>
                    </div>
                    </div>
                </div>
            </div>

            <div className='about'>
                {/* Navbar */}
                <div className='about0'>
                    <div
                        className={`about1 ${selectedTab === "Theme" ? "active" : ""}`}
                        onClick={() => handleTabClick("Theme")}
                    >
                        Thème
                    </div>
                    <div
                        className={`about1 ${selectedTab === "Panels" ? "active" : ""}`}
                        onClick={() => handleTabClick("Panels")}
                    >
                        Panels
                    </div>
                    <div
                        className={`about1 ${selectedTab === "Workshops" ? "active" : ""}`}
                        onClick={() => handleTabClick("Workshops")}
                    >
                        Workshops
                    </div>
                </div>

                {/* Contenu dynamique */}
                {selectedTab === "Theme" && (
                    <div className='about2'>
                        <div>
                        <h1 className='titleabout2'>La tunisie face à son avenir : </h1>
                        <h1 className='titleabout2'>Repenser le développement économique à l'ère de l'innovation</h1>
                        </div>
                        <div className='about20'>
                            Depuis plus d’une décennie, les diagnostics et les solutions proposées pour <span className='aboutgras'>revoir le modèle de développement en Tunisie</span> ont abondé à tire-larigot. Economistes tunisiens et internationaux se sont accordés à dire que <span className='aboutgras'>l’ancien modèle économique a atteint ses limites. </span>
                        </div>
                        <div className='about21'>
                            <div className='about211'>
                                <img className='imageabout' src={image1} alt="" />
                                <div className='about2110'>-1572,8 MD</div>
                                <div className='about2111'>BALANCE COMMERCIALE</div>
                            </div>
                            <div className='about211'>
                                <img className='imageabout' src={image2} alt="" />
                                <div className='about2110'>1%</div>
                                <div className='about2111'>CROISSANCE</div>
                            </div>
                        </div>
                        <div className='about20'>
                            Un projet qui doit assurer 
                            <span className='aboutgras'> la transformation structurelle de l’économie en une économie productive,</span> 
                            créatrice de richesse et d’emplois de qualité. Ce processus de transformation implique : 
                        </div>                        
                        <div className='about22'>
                            <div className='about220'>
                                <div className='about221'>La libéralisation de l’<span className='aboutorange'>initiative entrepreneuriale.</span></div>
                                <div className='about222'>L'innovation comme <span className='aboutorange'>moteur </span>de croissance économique.</div>
                            </div>
                            <div className='about220'>
                                <div className='about222'>Le <span className='aboutorange'>capital humain</span>: un atout économique stratégique.</div>
                                <div className='about221'>L'amélioration de la <span className='aboutorange'>compétitivité.</span></div>
                            </div>
                        </div>
                        <div className='about20'>
                            Sa réalisation requiert, ainsi, la mobilisation de l’ensemble des acteurs nationaux autour d’un projet rénové et participatif de 
                            <span className='aboutgras'> construction du pays. </span> 
                        </div>
                    </div>
                )}

                {selectedTab === "Panels" && (
                    <div className='about2'>
                        <div className='aboutpanels20'>
                        <div className='panels'>
                                <div className='panels1'>
                                <div className='numeropanel'>Panel 1 :</div>
                                <div className='titrepanel'>Valoriser le Capital Humain : Bâtir les Compétences de Demain pour une Tunisie Inclusive :</div>
                                </div>
                                <div className='panels2'>
                                Ce panel a mis en avant l’importance du développement des compétences pour préparer la Tunisie à l’économie de demain.</div>
                                </div>
                                <div className='speakerss1'>
                                    
                                <div className='speakerr1'>
                                    <img className='imagespeaker1' src={hamedmod} alt="" />
                                    <div className='nomspeaker1'>Hamed Benida</div>
                                </div>
                                <div className='speakerss2'>
                                <div className='speakerr2'>
                                <div className='speakerr1'>
                                    <img className='imagespeaker1' src={chirine} alt="" />
                                    <div className='nomspeaker1'>Chirine El Aich</div>
                                </div>
                                
                                
                                <div className='speakerr1'>
                                    <img className='imagespeaker1' src={tarek} alt="" />
                                    <div className='nomspeaker1' >Tarek Gassa</div>
                                </div>
                                </div>
                                <div className='speakerr2'>
                                <div className='speakerr1'>
                                    <img className='imagespeaker1' src={benaissa} alt="" />
                                    <div className='nomspeaker1' >Faten Ben Aissa</div>
                                </div>
                                <div className='speakerr1' >
                                    <img className='imagespeaker1' src={mezghich} alt="" />
                                    <div className='nomspeaker1'>Amine Mezghiche</div>
                                </div>
                                </div>
                                </div>
                                </div>
                            <div className='panels'>
                                <div className='panels1'>
                                <div className='numeropanel'>Panel 2 :</div>
                                <div className='titrepanel'>Libérer le Génie Entrepreneuriale : Booster l'Innovation et les Startups Tunisiennes :</div>
                                </div>
                                <div className='panels2'>
                                Ce panel explore les opportunités et défis de l'entrepreneuriat en Tunisie afin d’identifier les soutiens nécessaires et les actions concrètes pour libérer son potentiel.</div>
                                <div className='speakerss'>
                                <div className='speakerr' >
                                    <img className='imagespeaker' src={sawssen} alt="" />
                                    <div className='nomspeaker'>Sawssen Belhaj Amor</div>
                                </div>
                                <div className='speakerr'>
                                    <img className='imagespeaker' src={razi} alt="" />
                                    <div className='nomspeaker'>Razi Milani</div>
                                </div>
                                <div className='speakerr'>
                                    <img className='imagespeaker' src={maghraoui} alt="" />
                                    <div className='nomspeaker' >Karim Maghraoui</div>
                                </div>

                            
                                </div>
                            </div>
                            <div className='panels'>
                                <div className='panels1'>
                                <div className='numeropanel'>Panel 3 :</div>
                                <div className='titrepanel'>La Tunisie à la Conquête de Nouveaux Horizons Économiques :</div>
                                </div>
                                <div className='panels2'>
                                Ce panel examine des stratégies essentielles pour renforcer la compétitivité économique de la Tunisie, allant de l'amélioration du climat des affaires à la diversification des marchés internationaux.</ div>                            
                                <div className='speakerss'>
                                <div className='speakerr' >
                                    <img className='imagespeaker' src={sawssen} alt="" />
                                    <div className='nomspeaker'>Sawssen Belhaj Amor</div>
                                </div>
                                <div className='speakerr'>
                                    <img className='imagespeaker' src={ridha} alt="" />
                                    <div className='nomspeaker' >Ridha Gouiaa</div>
                                </div>
                                <div className='speakerr'>
                                    <img className='imagespeaker' src={fatma} alt="" />
                                    <div className='nomspeaker'>Fatma Braham</div>
                                </div>
                                </div>
                                </div>
                            
                            <div className='panels'>
                                <div className='panels1'>
                                <div className='numeropanel'>Panel 4 :</div>
                                <div className='titrepanel'>RSE et Innovation Verte : Une Nouvelle Vision pour la Tunisie :</div>
                                </div>
                                <div className='panels2'>

                                L’innovation durable offre à la Tunisie une opportunité stratégique de devenir un leader régional en durabilité.</div>
                                <div className='speakerss1'>
                                <div className='speakerr' >
                                    <img className='imagespeaker' src={karim} alt="" />
                                    <div className='nomspeaker'>Karim Ben Said</div>
                                </div>
                                <div className='speakerss2'>
                                <div className='speakerr'>
                                    <img className='imagespeaker' src={mounira} alt="" />
                                    <div className='nomspeaker' >Mounira Bouzouita</div>
                                </div>
                                <div className='speakerr'>
                                    <img className='imagespeaker' src={louati} alt="" />
                                    <div className='nomspeaker'>Imen Louati</div>
                                </div>
                                <div className='speakerr'>
                                    <img className='imagespeaker' src={hamed} alt="" />
                                    <div className='nomspeaker'>Hamed Benida</div>
                                </div>
                                </div>
                                </div>
                                </div>

                           
                        </div>
                    </div>
                )}

                {selectedTab === "Workshops" && (
                    <div className='about2'>
                        <div>
                        <div className='workshop1'>
                            <div>
                            <div className='numworkshop'>Workshop 1</div>
                            <div className='nomworkshop'>Profiling des entrepreneurs</div>
                            </div>
                            <div>
                            <div className='nomwork'>Haifa BEN ABDALLAH</div>
                            <div className='profession'>Directrice Exécutive de la fondation DAAM</div>
                            </div>
                        </div>
                        <div className='about20'>
                            <img className='imageworkshop' src={haifa} alt="" />
                        </div>
                        </div>
                        <div>
                        <div className='workshop2'>
                            <div>
                            <div className='numworkshop2'>Workshop 2</div>
                            <div className='nomworkshop2'>From Idea to Impact :</div>
                            <div className='nomworkshop2'>Designing a Sustainable Startup</div>
                            </div>
                            <div>
                            <div className='nomwork2'>Nour BEN LAZRAK</div>
                            <div className='profession2'>CEO & Founder :Digimytch & Chrysoptera</div>
                            </div>
                        </div>
                        <div className='about20'>
                            <img className='imageworkshop' src={nour} alt="" />
                        </div>
                        </div>
                    </div>
                    
                )}
            </div>
        </div>
    );
}

export default Program;
