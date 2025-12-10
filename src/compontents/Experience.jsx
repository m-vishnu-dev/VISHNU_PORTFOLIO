import React from 'react';
import Section from './Section'; // Import the new component
import './Experience.css';
import { FaGithub, FaDocker, FaServer, FaGlobe } from 'react-icons/fa';

function Experience() {
    return (
        // Use the Section component here
        <Section title="Experience">
            <div className="experience-item">
                <h3>FULL STACK DEVELOPER & TEAM LEAD INTEN – Renu Foundation</h3>
                <p className="experience-date">July 2025 – August 2025</p>
                <ul>
                    <li>Leading a small team in building web applications using React and Node.js.</li>
                    <li>Developed a Sales Management CRM model for Graphura Company as part of the internship.</li>
                    <li>Designed and developed role-based access with one backend and three separate frontends.</li>
                    <li>Worked on both frontend and backend development, ensuring responsive and secure features.</li>
                </ul>
                <br />
                <div className="project-links">
                    <a href="https://drive.google.com/file/d/1lxAY2PhRC_YrV34IXZ3Y2sH2blhSp1h7/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <FaGlobe className="project-icon" /> Appreciation Certificate
                    </a>
                </div>
            </div>
        </Section>
    );
}

export default Experience;