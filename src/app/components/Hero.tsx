
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../style/hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <section className="hero-section">
        <div className="hero-inner-container">
          <div className="hero-left">
            <h1>Welcome To Watch Shop</h1>
            <p>Your one-stop shop for the best watches</p>
            <div className="hero-button-container">
              <Link href={"#project"}>
                <button className="hero-button">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
          <div className="hero-right">
            <Image
              className="hero-image"
              alt="hero"
              width={350}
              height={350}
              src={'/pic/hero1.png'}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
