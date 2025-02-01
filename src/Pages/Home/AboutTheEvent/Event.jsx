import './Event.css';
import icon1 from "./../../../Assets/icon1.png";
import icon2 from "./../../../Assets/icon2.png";
import icon3 from "./../../../Assets/icon3.png";
import get from "./../../../Assets/Get.png"
import React, { useState, useEffect } from 'react';
import moment from 'moment';

export default function Event() {
   {/* const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [showSemicolon, setShowSemicolon] = useState(false);
  const [finish, setFinish] = useState(false)

  useEffect(() => {
    const updateCountdown = () => {
      const then = moment('2025-02-05 08:30:00', 'YYYY-MM-DD hh:mm:ss');
      // const then = moment('2023-07-24 08:30:00', 'YYYY-MM-DD hh:mm:ss');
      const now = moment();

      if (now >= then) {
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        setFinish(true);
      } else {
        const duration = moment.duration(then.diff(now));
        const totalDays = Math.floor(duration.asDays());

        setDays(totalDays);
        setHours(duration.hours());
        setMinutes(duration.minutes());
        setSeconds(duration.seconds());
      }
    };

    updateCountdown();

    const countdownInterval = setInterval(updateCountdown, 1000);
    return () => clearInterval(countdownInterval);
  }, []); */}
  return (
    <div className="event-container">
      <div className="title">
      À PROPOS DE L'ÉVÉNEMENT</div>
      <div className="subtitle">
        <div className="line-sub"></div>
        <div>Plongez au Cœur de l'Événement</div>
        <div className="line-sub"></div>
      </div>


       <div className="aboutTheEvent">

        <div className="values">
          <div className="icon-title">
            <img src={icon1} className="icons" />
            <div>Valeurs</div>
          </div>
          <div className="parag">Fondés sur un objectif, nous vivons selon les principes de Responsabiliser, Innover, Impacter.</div>
        </div>

        <div className="thematic">
          <div className="icon-title">
            <img src={icon2} className="icons" />
            <div>Thématique</div>
          </div>
          <div className="parag">Innovation et entrepreneuriat pour un avenir durable.</div>
        </div>

        <div className="info">
          <div className="icon-title">
            <img src={icon3} className="icons" />
            <div>Information</div>
          </div>
          <div className="parag">Un événement professionnel pour les jeunes entrepreneurs, les start-ups et les créateurs de projets.</div>
        </div>

      </div> 
 
      {/* {!finish && <div className="counter-container">
        <div className='time-line'>
        <div className='time-remaining-title'>TIME REMAINING</div>
        <div className='line1'></div>
        </div>
        
          <div className="timer-container">
            <div className="timer">
              <div className='time1'>{days}</div>
              <span className='time2'>Days</span>
            </div>
            <div className='two-points'>:</div>
            {showSemicolon ? <div className="semicolon">:</div> : null}
            <div className="timer">
              <div className='time1'>{hours}</div>
              <span className='time2'>Hours</span>
            </div>
            <div className='two-points'>:</div>
            {showSemicolon ? <div className="semicolon">:</div> : null}
            <div className="timer">
              <div className='time1'>{minutes}</div>
              <span className='time2'>Minutes</span>
            </div>
            <div className='two-points'>:</div>
            {showSemicolon ? <div className="semicolon">:</div> : null}
            <div className="timer">
              <div className='time1'>{seconds}</div>
              <span className='time2'>Seconds</span>
            </div>
          
          </div>
           
        
        <div className='line2'></div>
      </div>  }
      {/* {finish && <img src={get} className="header-logo" />} */} 

    </div>
  );
}
