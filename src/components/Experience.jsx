import React from 'react';
import './Experience.css';
import { experiences } from '../constants';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const Experience = () => {
  return (
    <section className="section" id="experience">
      <h2 className="section-title">My Journey</h2>
      
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            {/* The Dot on the line */}
            <div className="timeline-dot"></div>
            
            <div className="timeline-content">
              {/* Gradient Line (Consistent with Skills) */}
              <div className="card-border-top"></div>

              <div className="timeline-header">
                <span className="timeline-date">
                  <FaCalendarAlt className="inline-icon" /> {exp.duration}
                </span>
                <span className="timeline-type">{exp.type}</span>
              </div>

              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;