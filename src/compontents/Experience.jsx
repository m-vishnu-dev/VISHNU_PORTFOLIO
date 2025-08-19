import React from 'react';
import Section from './Section'; // Import the new component
import './Experience.css';

function Experience() {
    return (
        // Use the Section component here
        <Section title="Experience">
            <div className="experience-item">
                <h3>Full Stack Developer Intern & Team Lead – Renu Foundation</h3>
                <p className="experience-date">July 2025 – Present</p>
                <ul>
                    <li>Leading a small team in building web applications using React and Node.js.</li>
                    <li>Developed a Sales Management CRM model for Graphura Company as part of the internship.</li>
                    <li>Designed and developed role-based access with one backend and three separate frontends.</li>
                    <li>Worked on both frontend and backend development, ensuring responsive and secure features.</li>
                </ul>
            </div>
        </Section>
    );
}

export default Experience;