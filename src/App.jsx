import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Aboutme from "./compontents/Aboutme";
import Home from "./compontents/Home";
import Contact from "./compontents/Contact";
import Projects from "./compontents/Projects";
import Experience from './compontents/Experience';
import resumePDF from './assets/reseme.pdf';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen(prev => !prev);
  const handleClose = () => setMenuOpen(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Vishnu_Vardhan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-left"></div>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#home" onClick={handleClose}>Home</a></li>
          <li><a href="#aboutme" onClick={handleClose}>About Me</a></li>
          <li><a href="#projects" onClick={handleClose}>Projects</a></li>
          <li><a href="#experience" onClick={handleClose}>Experience</a></li>
          <li><a href="#contact" onClick={handleClose}>Contact</a></li>
          <li>
            <button onClick={() => { handleClose(); handleDownload(); }}>
              Download Resume
            </button>
          </li>
        </ul>
        <div className="hamburger" onClick={handleToggle}>
          {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>
      </nav>

      {/* Sections */}
      <div className="page">
        <section id="home"><Home /></section>
        <section id="aboutme"><Aboutme /></section>
        <section id="projects"><Projects /></section>
        <section id="experience"><Experience /></section>
        <section id="contact"><Contact /></section>
      </div>
    </div>
  );
}

export default App;
