import React, { useState } from 'react';
import './Navbar.css';
import { FiSun, FiMoon, FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi';

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">
            Jashwanth<span>.</span>
          </div>

          {/* Desktop Links (Hidden on Mobile) */}
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">My Projects</a></li>
          </ul>

          <div className="nav-actions">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
              {isDarkMode ? <FiSun /> : <FiMoon />}
            </button>
            
            <a href="#contact" className="contact-btn">
              Contact <FiArrowUpRight />
            </a>

            {/* Mobile Hamburger Button */}
            <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown (Visible only when open) */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About Me</a></li>
          <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
          <li><a href="#projects" onClick={closeMenu}>My Projects</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;