import React from "react";
import Link from "next/link";
import "../style/navbar.css"

const Navbar = () => {
  return (
    <div className="navbar-container">
      <header className="navbar-header">
        <div className="navbar-inner-container">
          <a className="navbar-logo">
            <span>Watch Shop</span>
          </a>
          <nav className="navbar-links">
            <Link href={"/"} className="navbar-link">
              Home
            </Link>
            <Link href={"#about"} className="navbar-link">
              About
            </Link>
            <Link href={"#project"} className="navbar-link">
              Watches
            </Link>
            <Link href={"#contect"} className="navbar-link">
              Contact
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
