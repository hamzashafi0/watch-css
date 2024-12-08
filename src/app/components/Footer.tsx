import React from 'react';
import '../style/footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer-content">
        <div className="container mx-auto flex items-center sm:flex-row flex-col">
          <a className="footer-title">
            <span>Hamza Shafi</span>
          </a>
          <p className="footer-paragraph">
            © 2024 Watch Shop — All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
