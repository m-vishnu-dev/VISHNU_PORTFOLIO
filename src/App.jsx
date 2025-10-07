import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

// Import all of your page components
import Home from "./compontents/Home";
import Aboutme from "./compontents/Aboutme";
import Projects from "./compontents/Projects";
import Experience from './compontents/Experience';
import Resumes from './compontents/Resumes';
import Contact from "./compontents/Contact";

// Import your main CSS file
import './App.css';

function App() {
  // State for managing the mobile menu toggle
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu's open/close state
  const handleToggle = () => setMenuOpen(prev => !prev);

  // Function to close the menu (used when a link is clicked)
  const handleClose = () => setMenuOpen(false);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-left"></div>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {/* This is the correct and final navigation setup.
            Each 'href' MUST start with '#' to scroll to the correct section on the same page.
          */}
          <li><a href="#home" onClick={handleClose}>Home</a></li>
          <li><a href="#aboutme" onClick={handleClose}>About Me</a></li>
          <li><a href="#projects" onClick={handleClose}>Projects</a></li>
          <li><a href="#experience" onClick={handleClose}>Experience</a></li>
          <li><a href="#resumes" onClick={handleClose}>Resumes</a></li>
          <li><a href="#contact" onClick={handleClose}>Contact</a></li>
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
        <section id="resumes"><Resumes /></section>
        <section id="contact"><Contact /></section>
      </div>
    </div>
  );
}

export default App;