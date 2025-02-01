import React, { useState, useEffect } from "react";
import axios from "axios";
import './Allies.css';

export default function Allies() {
  const [allies, setAllies] = useState([]);
  const baseURL = "https://get-entrepreneurial-sxzw.vercel.app";

  useEffect(() => {
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

  return (
    <div className="allies">
      <div className="titleallies">NOS PARTENAIRES PRÉCIEUX</div>
      <div className="subtitle1">
        <div className="line-sub"></div>
        <div className="sub">Ensemble dans la vision, ensemble dans la réussite</div>
        <div className="line-sub"></div>
      </div>

      <div className="containerPartenaires">
        <div className="sponsor-line">
          {allies.length > 0 ? (
            allies.map((ele) => (
              <div className="item" key={ele.id}>
                {ele.website && (
                  <a href={`${ele.website}`} target="_blank" rel="noopener noreferrer">
                    {ele.img && (
                      <img 
                        src={`${baseURL}/api/collab/collabImg/${ele.img}`} 
                        alt={`Ally ${ele.id}`} 
                        className="image" 
                      />
                    )}
                  </a>
                )}
              </div>
            ))
          ) : (
            <div className="no-sponsors">Aucun partenaire trouvé</div>
          )}
        </div>
      </div>
    </div>
  );
}
