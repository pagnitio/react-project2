import React from 'react'
import "./About.css";
import about from "../assets/about.jpg"
const About = () => {
  return (
   
      <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={about} alt="About Us" />
        </div>
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            We are a team of dedicated professionals committed to providing the
            best services in the industry. With years of experience and a passion
            for innovation, we strive to deliver top-notch solutions for our clients.
          </p>
          <p>
            Our mission is to create meaningful connections with our customers
            and deliver outstanding results that exceed expectations.
          </p>
        </div>
      </div>
    </section>
   
  )
}

export default About
