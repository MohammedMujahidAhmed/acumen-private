import React from 'react';
import preloder from '../gif/preloader.gif'
import '../styles/Preloader.css'

const Preloader = () => {
  return (
    <div className="preloader">
      <img src={preloder} alt="Loading..." className="preloader-gif" />
    </div>
  );
}

export default Preloader;
