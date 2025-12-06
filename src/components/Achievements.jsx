import React from 'react';
import './Achievements.css';
import { achievements } from '../constants';
import { FaTrophy, FaAward } from 'react-icons/fa';

const Achievements = () => {
  return (
    <section className="section" id="achievements">
      <h2 className="section-title">Honors & Awards</h2>
      
      <div className="achievements-grid">
        {achievements.map((item, index) => (
          <div key={index} className="achievement-card">
            {/* Gradient Top Line */}
            <div className="card-border-top"></div>

            <div className="achievement-icon">
              <FaTrophy />
            </div>

            <h3 className="achievement-title">{item.title}</h3>
            <span className="achievement-event">{item.event}</span>
            <p className="achievement-desc">{item.desc}</p>
            
            {/* Decorative background icon */}
            <div className="bg-icon">
              <FaAward />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;