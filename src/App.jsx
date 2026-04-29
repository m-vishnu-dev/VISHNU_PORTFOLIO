import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

// Import all of your page components
import Home from "./compontents/Home";
import Aboutme from "./compontents/Aboutme";
import Projects from "./compontents/Projects";
import Experience from './compontents/Experience';
import Education from './compontents/Education';
import Resumes from './compontents/Resumes';
import Contact from "./compontents/Contact";

// Import your main CSS file
import './App.css';

function App() {
  // State for managing the mobile menu toggle
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu's open/close state
  const handleToggle = () => setMenuOpen(prev => !prev);



  // Function to scroll smoothly and update URL without a hash
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Update the URL to cleanly show the section name without a '#'
    window.history.pushState(null, '', id === 'home' ? '/' : '/' + id);
    setMenuOpen(false); // Close mobile menu if open
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-left"></div>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {/* This prevents the hash from showing in the URL while maintaining smooth scroll */}
          <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Home</a></li>
          <li><a href="#aboutme" onClick={(e) => scrollToSection(e, 'aboutme')}>About Me</a></li>
          <li><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>Projects</a></li>
          <li><a href="#experience" onClick={(e) => scrollToSection(e, 'experience')}>Experience</a></li>
          <li><a href="#education" onClick={(e) => scrollToSection(e, 'education')}>Education</a></li>
          <li><a href="#resumes" onClick={(e) => scrollToSection(e, 'resumes')}>Resumes</a></li>
          <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a></li>
        </ul>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="hamburger" onClick={handleToggle}>
          {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>
      </nav>

      {/* Page Content Sections */}
      <div className="page">
        {/* Each section has an 'id' that matches the 'href' in the navigation links.
          This is how the browser knows where to scroll.
        */}
        <section id="home"><Home /></section>
        <section id="aboutme"><Aboutme /></section>
        <section id="projects"><Projects /></section>
        <section id="experience"><Experience /></section>
        <section id="education"><Education /></section>
        <section id="resumes"><Resumes /></section>
        <section id="contact"><Contact /></section>
      </div>
    </div>
  );
}

export default App;