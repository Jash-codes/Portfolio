import React from 'react';
import './Hero.css';
import { FiArrowRight, FiDownload, FiEye, FiFile } from 'react-icons/fi';
// Make sure to put your image at src/assets/profile.jpg
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">

        <div className="profile-container">
          <img src={profileImg} alt="Jashwanth G" className="profile-img" />
          <div className="glow-effect"></div>
        </div>

        <p className="greeting">
          Hi! I'm Jashwanth G <span className="wave">👋</span>
        </p>

        <h1 className="headline">
          Software Developer based<br />
          <span className="italic-text">in Chennai.</span>
        </h1>

        <p className="subtext">
          I am a Final Year B.Tech IT student, a tech enthusiast and programmer passionate about
          solving problems and building innovative solutions in AI, Full Stack and Machine Learning.
        </p>

        {/* --- BUTTONS SECTION --- */}
        <div className="hero-buttons">

          {/* 1. Contact Button */}
          <a href="#contact" className="btn btn-primary">
            contact me <FiArrowRight />
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            view resume <FiFile/>
          </a>

        </div>

      </div>
    </section>
  );
};

export default Hero;