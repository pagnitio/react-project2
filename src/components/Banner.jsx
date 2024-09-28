import React from 'react'
import "./Banner.css";
import bannerImage from '../assets/back.png';
const Banner = () => {
  return (
    <div className="banner-container">
        <img src={bannerImage} alt="Banner" className="banner-image" />
      <div className="banner-content">
        <h1>Welcome to Our Website</h1>
        <p>Your one-stop destination for amazing experiences.</p>
        <button className="banner-button">Learn More</button>
      </div>
    </div>
  )
}

export default Banner
