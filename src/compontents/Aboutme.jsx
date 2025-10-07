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
                    I am Manda Vishnu Vardhan Reddy, a Full Stack Developer with a strategic mindset for <strong>Product Management</strong>. My technical expertise spans across frontend technologies like HTML5, CSS3, JavaScript, React.js, Tailwind CSS, and Bootstrap, as well as backend technologies including Spring Boot, Servlet, JDBC, and Hibernate.<br />
                    I am currently working as a Full Stack Web Developer at the Renu Sharma Foundation. This 3-month internship involves contributing to both frontend and backend development of real-world web applications. In addition to my development work, I have a clear understanding of Object-Oriented Programming (OOP) and Data Structures and Algorithms (DSA) in Java.<br />
                    My projects demonstrate my ability to deliver end-to-end solutions, such as "DRIVER_LOCKER," a full-stack application using React.js and Spring Boot for secure file storage, and "NEWSPAGE," a React-based application with JWT-based authentication for personalized content. I am a motivated and collaborative professional with a proven ability to lead and manage time effectively, bridging the gap between technical execution and user-centric product vision.
                </p>
                <p>
                    I actively practice problem-solving and Data Structures and Algorithms (DSA) on coding platforms. I’ve solved 150+ problems and participated in coding contests to improve my skills.
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
            </div>

            <div className="skills">
                <h1>Skills</h1>
                <p>I am good at these technologies.</p>

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
                <h2>Product & Management Skills</h2>
                <div className="pm-skills-container">
                    <span className="pm-skill-tag">Requirement Gathering</span>
                    <span className="pm-skill-tag">Agile Methodologies</span>
                    <span className="pm-skill-tag">Feature Prioritization</span>
                    <span className="pm-skill-tag">User Feedback Analysis</span>
                    <span className="pm-skill-tag">Competitive Analysis</span>
                </div>

            </div>
        </div>
    );
}

export default Aboutme;
