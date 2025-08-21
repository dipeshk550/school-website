import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png'; // Add your logo here

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="School Logo" className="logo" />
      </div>
      <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#programs">Programs</a>
        <a href="#achievements">Achievements</a>
        <a href="#events">Events</a>
        <a href="#admissions">Admissions</a>
        <a href="#contact">Contact</a>
      </div>
      
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
