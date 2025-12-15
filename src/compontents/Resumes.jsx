import React from 'react';
import './Resumes.css';
// Make sure these paths match your actual folder structure
import aspring_productmanger from '../assets/vishnu__resume.pdf';
import fullStackResumePDF from '../assets/vishnu_resume.pdf';

function Resumes() {
    const handleDownload = (pdfFile, fileName) => {
        const link = document.createElement('a');
        link.href = pdfFile;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className='resumes-page'>
            <h1>Resume</h1>

            <div className='resume-container'>
                {/* Card 1: Full Stack Developer */}
                <div className='resume-card'>
                    <h2>Full Stack Developer</h2>
                    <p>
                        A dedicated Full Stack Developer with hands-on experience in building scalable web applications using
                        React, Node.js, Spring Boot, and modern tools. Completed a full-stack internship where I contributed to
                        real-world projects, collaborated in an Agile environment, and delivered features end-to-end. Strong in
                        problem-solving, DSA (Java), and team collaboration. Open to full-time roles and impactful opportunities.
                    </p>
                    <button onClick={() => handleDownload(fullStackResumePDF, 'Vishnu_Full_Stack_Resume.pdf')}>
                        Download PDF
                    </button>
                </div>

                {/* Card 2: Product Manager */}
                <div className='resume-card'>
                    <h2>Associate Product Manager</h2>
                    <p>
                        Aspiring Product Manager with a strong technical foundation in full-stack development.
                        Passionate about bridging the gap between engineering constraints and user needs.
                        Eager to leverage technical expertise to translate requirements into actionable features,
                        define product vision, and contribute to the product lifecycle in an innovative organization.
                    </p>
                    <button onClick={() => handleDownload(aspring_productmanger, 'Vishnu_PM_Resume.pdf')}>
                        Download PDF
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Resumes;