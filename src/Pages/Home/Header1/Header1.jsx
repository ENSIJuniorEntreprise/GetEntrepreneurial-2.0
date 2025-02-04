import React from "react";
import './Header1.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default function Header1() {
    const [days, setDays] = useState(0);
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
  }, []);
  return (
    <div className="container0">
      <div className="container1">
        <div className="space"></div>
        {!finish && <div className="counter-container">
        <div className='time-line'>
        <div className='time-remaining-title'>TEMPS RESTANT</div>
        <div className='line11'></div>
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
           
        
        <div className='line22'></div>
      </div>  }
      {/* {finish && <img src={get} className="header-logo" />} */}
        <div className="Header-Event"><div><span className="get11">GET</span></div><div className="Header-Event11"> Entrepreneurial 2.0</div></div>
        <div className="subtitle0">
          <div className="line"></div>
          <div className="slogan">#Forge_The_Future</div>
          <div className="line"></div>
        </div>
        <div className="date-container">
          <FaMapMarkerAlt className="icon1" />
          <div className="utica">UTICA,</div>
          <div className="date">5</div>
          <div className="jan">FÉVRIER 2025</div>
        </div>
        <div className="bouttonsheader">
        <button className="subscribe"><Link to="/Register1" >S'INSCRIRE {">"} </Link></button>
        <button className="subscribe"><Link to="/Register2">EXPOSER {">"} </Link></button>
        </div>
      </div>
    </div>
  );
}
