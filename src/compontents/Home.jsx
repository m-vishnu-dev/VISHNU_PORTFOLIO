import React from 'react';
import { FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import pic from '../assets/picc.jpg';
import './Home.css';

function Home() {
    return (
        <div className='home'>
            <div className="text">
                <h1>Hello, I'm Vishnu</h1>
                <p>
                    I'm a Full Stack Developer and Team Lead with experience in building scalable applications using Node.js, Spring Boot, and React. At the Renu Sharma Foundation, I lead development initiatives in a fast-paced startup environment—driving projects from concept to deployment.
                    With strong problem-solving skills and a solid foundation in Data Structures & Algorithms (Java), I focus on building systems that are efficient, reliable, and user-centric.
                </p>

                {/* Location */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
                    <FaMapMarkerAlt style={{ color: 'red' }} title="Location" />
                    <p>Hyderabad, India</p>
                </div>

                {/* Social Icons */}
                <div style={{ display: 'flex', gap: '20px', fontSize: '24px', marginTop: '15px' }}>
                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/vishnu-vardhan-reddy-manda-755890282/overlay/about-this-profile/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="LinkedIn"
                    >
                        <FaLinkedin style={{ color: '#0077B5' }} />
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/vishnuvardhnareddy"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="GitHub"
                    >
                        <FaGithub style={{ color: 'white' }} />
                    </a>
                </div>
            </div>
            <div className="image">
                <img src={pic} alt="Profile" />
            </div>
        </div>
    );
}

export default Home;
