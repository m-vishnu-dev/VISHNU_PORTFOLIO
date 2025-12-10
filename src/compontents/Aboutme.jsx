import React from 'react';

import html from '../assets/html.png';
import css from '../assets/css.webp';
import js from '../assets/js.jpeg';
import react from '../assets/react.png';
import bootstrap from '../assets/Bootstrap.png';
import tailwind from '../assets/Tailwind.png';

import java from '../assets/java.webp';
import springboot from '../assets/springboot.svg';
import hibernate from '../assets/hibernate.png';
import jdbc from '../assets/jdbc.png';

import mysql from '../assets/mysql.png';
import mongodb from '../assets/mongodb.png';

import node from '../assets/node.png';

import git from '../assets/git.png';
import github from '../assets/github.png';
import postman from '../assets/postman.png';

import leetcode from '../assets/LeetCode.png';
import gfg from '../assets/GeeksForGeeks.png';
import './Aboutme.css';

function Aboutme() {
    return (
        <div className='aboutme'>
            <h1>About Me</h1>
            <div className="abouttext">
                <p>
                    <strong>Hello — I'm Manda Vishnu Vardhan Reddy.</strong> I’m a Full Stack Developer with hands-on experience building and shipping production-ready applications using <strong>Node.js, Spring Boot, and React</strong>.
                    I recently completed a Full Stack Development internship at the <strong>Renu Sharma Foundation</strong>, where I contributed to multiple real-world projects in a fast-paced, startup-driven environment.
                </p>

                <p>
                    During my internship, I worked across the full stack — creating clean frontend interfaces, developing robust backend services, and collaborating on deployment workflows. I apply strong <strong>DSA and OOP fundamentals in Java</strong> to write efficient, maintainable code and design scalable systems.
                </p>

                <p>
                    Some of my notable work includes <em>DRIVER_LOCKER</em> — a secure full-stack file storage platform (React + Spring Boot) — and <em>NEWSPAGE</em> — a React application using JWT authentication and personalized content delivery. These projects strengthened my skills in architecture, API development, database design, and debugging in production environments.
                </p>

                <p>
                    I actively practice problem-solving and Data Structures — with <strong>150+ problems solved</strong> — to continuously improve my system design and logical thinking abilities.
                </p>
                <div className="tech-row">
                    <a href="https://leetcode.com/u/vishnureddy45/" target="_blank" rel="noopener noreferrer">
                        <img src={leetcode} alt="LeetCode" />
                        <p>LeetCode</p>
                    </a>
                    <a href="https://www.geeksforgeeks.org/user/vr45epen/" target="_blank" rel="noopener noreferrer">
                        <img src={gfg} alt="GeeksforGeeks" />
                        <p>GeeksforGeeks</p>
                    </a>
                </div>
                <br />
                <p style={{ marginTop: '0.75rem' }}>
                    <strong>Location:</strong> Hyderabad, India <br />
                    <strong>Open to:</strong> Full-time roles, internships, freelance work, and collaborative projects. <br />
                    <strong>Email:</strong>
                    <a style={{ marginLeft: '0.5rem' }}>
                        vr4507@gmail.com
                    </a>
                </p>

            </div>

            <div className="skills">
                <h1>Skills</h1>
                <p>I work with these technologies regularly.</p>

                <h2>Language & Data Structures</h2>
                <div className="tech-row">
                    <div><img src={java} alt="Java" /><p>Java</p></div>
                </div>

                <h2>Frontend</h2>
                <div className="tech-row">
                    <div><img src={html} alt="HTML" /><p>HTML</p></div>
                    <div><img src={css} alt="CSS" /><p>CSS</p></div>
                    <div><img src={js} alt="JavaScript" /><p>JavaScript</p></div>
                    <div><img src={react} alt="React" /><p>React</p></div>
                    <div><img src={bootstrap} alt="Bootstrap" /><p>Bootstrap</p></div>
                    <div><img src={tailwind} alt="Tailwind CSS" /><p>Tailwind CSS</p></div>
                </div>

                <h2>Backend</h2>
                <div className="tech-row">
                    <div><img src={node} alt="Node.js" /><p>Node.js</p></div>
                    <div><img src={springboot} alt="Spring Boot" /><p>Spring Boot</p></div>
                    <div><img src={hibernate} alt="Hibernate" /><p>Hibernate</p></div>
                    <div><img src={jdbc} alt="JDBC" /><p>JDBC</p></div>
                </div>

                <h2>Database</h2>
                <div className="tech-row">
                    <div><img src={mysql} alt="MySQL" /><p>MySQL</p></div>
                    <div><img src={mongodb} alt="MongoDB" /><p>MongoDB</p></div>
                </div>

                <h2>Tools</h2>
                <div className="tech-row">
                    <div><img src={git} alt="Git" /><p>Git</p></div>
                    <div><img src={github} alt="GitHub" /><p>GitHub</p></div>
                    <div><img src={postman} alt="Postman" /><p>Postman</p></div>
                </div>

                <h2>Leadership & Management</h2>
                <div className="pm-skills-container">
                    <span className="pm-skill-tag">Team Leadership</span>
                    <span className="pm-skill-tag">Agile / Scrum</span>
                    <span className="pm-skill-tag">Sprint Planning</span>
                    <span className="pm-skill-tag">Mentoring</span>
                    <span className="pm-skill-tag">Code Reviews</span>
                </div>

            </div>
        </div>
    );
}

export default Aboutme;
