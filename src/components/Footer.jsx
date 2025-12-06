import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Social Links */}
        <div className="social-icons">
          <a href="https://github.com/Jash-codes" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/jashwanth-g-0b0a91276/" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin />
          </a>
          <a href="https://x.com/jshwanthhh" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaTwitter />
          </a>
        </div>

        {/* Copyright Text */}
        <p className="copyright">
          © {new Date().getFullYear()} <strong>Jashwanth G</strong>. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;