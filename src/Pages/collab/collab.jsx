import React, { useState, useEffect } from "react";
import axios from "axios";
import './collab.css'

export default function Collab() {
    const alliess = [
        { id: 1, logo: "https://pic.clubic.com/v1/images/2063553/raw" },
        { id: 2, logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/EY_logo_2019.svg/800px-EY_logo_2019.svg.png" },
        { id: 3, logo: "https://media.licdn.com/dms/image/C560BAQE0N4qKJB0n6A/company-logo_200_200/0/1631323272759?e=2147483647&v=beta&t=2Ls7e6TyC_KT9w6RT_VVR4LBQMyIZasGIiE35lGf6ZY" },
        { id: 4, logo: "https://fabskill.s3.eu-west-3.amazonaws.com/job_visual/1670509519-884-1797.png" },
        { id: 5, logo: "https://media.licdn.com/dms/image/C560BAQE0N4qKJB0n6A/company-logo_200_200/0/1631323272759?e=2147483647&v=beta&t=2Ls7e6TyC_KT9w6RT_VVR4LBQMyIZasGIiE35lGf6ZY" },

    ]
    const [allies, setAllies] = useState([]);

    useEffect(() => {
        // Fetch allies from the backend when the component mounts
        const fetchAllies = async () => {
            try {
                const response = await axios.get("http://localhost:8000/collab/");
                setAllies(response.data);
            } catch (error) {
                console.error("Error fetching allies:", error);
            }
        };

        fetchAllies();
    }, []);

    const EntrepriseRecrutement = allies.filter((ally) => ally.type === "Ally");
    const Exposant = allies.filter((ally) => ally.type === "Exposant");
    const Sponsor = allies.filter((ally) => ally.type === "Sponsor");

    
    
    return (
        <div className="Collab-section1">
            <div className="container02">
                <div className="container3">
                    <div className="text-centered-agenda2">Our Partners</div>
                    <div className="subtitle-pgm">
                        <div className="line-sub-pgm"></div>
                        <div>The Art of Entrepreneurial Fusion!</div>
                        <div className="line-sub-pgm"></div>
                    </div>
                </div>
            </div>
            <div className="jobs-offer">
                <div className="title1">Les entreprises qui recrutent</div>
                <div className="sous">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore,sed do eiusmod tempor incididunt ut labore,</div>
                <div className="jobs">
                    {alliess.map(ally => (
                        <div key={ally.id} className="ally">
                            <div className="cadre"><img src={ally.logo} alt={`Ally ${ally.id}`} className="allyphoto" /> </div>
                            <div className="alliesCont">
                                <button className="btn1">Voir l'offre</button>
                                <button className="btn2">Je postule</button>
                            </div>     
                        </div>
                    ))}
                </div>
            </div>
            <div className="exposant">
                <div className="title1">Les exposants</div>
                <div className="sous1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore,sed do eiusmod tempor incididunt ut labore,</div>
                <div className="jobs">
                    {alliess.map(exp => (
                        <div key={exp.id} className="exp">
                            <img src={exp.logo} alt={`exp ${exp.id}`} className="expPhoto" />
                        </div>
                    ))}
                </div>
            </div>
            <div className="jobs-offer">
                <div className="title1">Les sponsors</div>
                <div className="sous">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore,sed do eiusmod tempor incididunt ut labore,</div>
                <div className="jobs s">
                    {alliess.map(sponsor => (
                        <div key={sponsor.id} className="sponsor">
                            <img src={sponsor.logo} alt={`sponsor ${sponsor.id}`} className="sponsorPhoto" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}