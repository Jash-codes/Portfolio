import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements'; 
import Contact from './components/Contact'; 
import Footer from './components/Footer';


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <div className="app-container">
      <div className="background-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects /> 
      <Achievements />
      <Contact />  
      <Footer />  
      
    </div>
  );
}

export default App;