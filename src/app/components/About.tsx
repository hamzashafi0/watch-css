
import React from 'react';
import Image from 'next/image';
import '../style/about.css'

const About = () => {
  return (
    <div id="about" className="about-container">
      <section className="about-section">
        <div className="about-inner-container">
          <h1 className="about-heading">About Us</h1>
          <Image
            className="about-image"
            alt="hero"
            width={200}
            height={200}
            src={'/pic/ab.webp'}
          />
          <div className="about-text-container">
            <p className="about-text">
              Welcome to my watch shop. Where we believe a watch is more than just an accessory; it is a statement of style, precision, and craftsmanship. 
              Our mission is to bring you a diverse selection of premium timepieces from around the globe. We are here to help you find the perfect 
              watch to complement your personality and your look.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
