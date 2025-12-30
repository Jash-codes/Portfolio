import React from 'react';
import './About.css';
import profileImg from '../assets/profile.jpg'; 

const About = () => {
  return (
    <section className="section" id="about">
      <div className="about-wrapper glass-card">
        
        {/* Text Side */}
        <div className="about-text">
          <h2 className="section-title text-left">About Me</h2>
          <p>
            Hello! I am <strong>Jashwanth G</strong>, a final-year <strong>B.Tech Information Technology</strong> student at 
            Dr. M.G.R. Educational and Research Institute with a CGPA of <strong>8.28</strong>.
          </p>
          <p>
            My journey in tech is driven by a curiosity to build things that matter. 
            I have a strong foundation in <strong>Full Stack Development</strong> and <strong>Machine Learning</strong>. 
            Whether it's building a <em>Rheumatoid Arthritis tracker</em> in Angular or classifying ML models at iNueron, 
            I love turning complex problems into user-friendly solutions.
          </p>
          <p>
            When I'm not coding, you can find me watching <strong>Anime</strong>, catching up on the latest <strong>Formula 1</strong> race, 
            or analyzing Hollywood movies. I am currently looking for opportunities to contribute my skills in Java, Puthon and Web Development 
            to a dynamic team.
          </p>
        </div>

        {/* Image Side */}
        <div className="about-image">
          <img src={profileImg} alt="Jashwanth G" />
          <div className="img-backdrop"></div>
        </div>

      </div>
    </section>
  );
};

export default About;