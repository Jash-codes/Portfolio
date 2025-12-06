import React from 'react';
import './Projects.css';
import { projects } from '../constants';
import { FiGithub, FiArrowRight } from 'react-icons/fi'; // Removed FiExternalLink
import { FaFolderOpen } from 'react-icons/fa';

const Projects = () => {
  return (
    <section className="section" id="projects">
      <h2 className="section-title">Featured Projects</h2>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="card-border-top"></div>

            <div className="project-header">
              <div className="folder-icon">
                <FaFolderOpen />
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" title="View Code">
                  <FiGithub />
                </a>
                {/* Demo Icon Removed Here */}
              </div>
            </div>

            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.desc}</p>
            
            <div className="project-tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="view-more-container">
        <a 
          href="https://github.com/Jash-codes" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="view-more-btn"
        >
          View More Projects <FiArrowRight />
        </a>
      </div>

    </section>
  );
};

export default Projects;