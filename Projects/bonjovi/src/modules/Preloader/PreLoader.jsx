// Loader.js
import React from 'react';
import './Preloader.css'; // Import the CSS file

const Preloader = () => {
  return <div className="flex items-center justify-center h-screen w-screen bg-blackk">
    <div className='loader'></div>
  </div>;
};

export default Preloader;
