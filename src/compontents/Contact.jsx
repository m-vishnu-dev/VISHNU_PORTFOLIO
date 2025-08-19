import React from 'react';
import Section from './Section'; // Import the new component
import { MdEmail, MdPhone } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Contact.css';

function Contact() {
    return (
        // Use the Section component here
        <Section title="Contact Me">
            <div className="contact-details">
                <p>
                    <MdEmail /> Email: <a href="mailto:vr4507@gmail.com">vr4507@gmail.com</a>
                </p>
                <p>
                    <MdPhone /> Phone: +91-9391512635
                </p>
                <p>
                    <FaLinkedin /> LinkedIn:{' '}
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        linkedin.com/in/vishnu-vardhan-reddy-manda
                    </a>
                </p>
                <p>
                    <FaGithub /> GitHub:{' '}
                    <a href="https://github.com/vishnuvardhnareddy" target="_blank" rel="noopener noreferrer">
                        github.com/vishnuvardhnareddy
                    </a>
                </p>
            </div>
        </Section>
    );
}

export default Contact;