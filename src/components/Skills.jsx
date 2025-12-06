import React from 'react';
import './Skills.css';
import { skills } from '../constants';
// FIX: Changed 'Fausers' to 'FaUsers'
import { FaCode, FaServer, FaDatabase, FaUsers } from 'react-icons/fa'; 

const Skills = () => {
  // Helper to get icon based on category index
  const getIcon = (index) => {
    switch(index) {
      case 0: return <FaCode />;        // Frontend
      case 1: return <FaServer />;      // Backend
      case 2: return <FaDatabase />;    // Database
      case 3: return <FaUsers />;       // Soft Skills (Leadership/Teamwork)
      default: return <FaCode />;
    }
  };

  return (
    <section className="section" id="skills">
      <h2 className="section-title">Technical Proficiency</h2>
      
      <div className="skills-container">
        {skills.map((group, index) => (
          <div key={index} className="skill-card">
            {/* The Gradient Top Line */}
            <div className="card-border-top"></div>
            
            <div className="card-header">
              <span className="card-icon">{getIcon(index)}</span>
              <h3>{group.category}</h3>
            </div>

            <div className="skill-tags">
              {group.items.map((skill, i) => (
                <span key={i} className="skill-pill">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;