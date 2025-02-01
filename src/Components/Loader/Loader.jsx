import React from 'react';
import './Loader.css';
import Spinner from './../Spinner/spinner';
import loader from './../../Assets/loader.png'



function Loader() {
    return (
      <div className="loader">
        <Spinner></Spinner>
        <img src={loader} className='loaderImg'></img>
      </div>
    );
  }

  export default Loader;
