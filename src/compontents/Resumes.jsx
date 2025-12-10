import React from 'react';
import './Resumes.css';
// import Vishnu_Vardhan_Product from '../assets/MANDA-VISHNU-VARDHAN-REDDY-productmanger (2).pdf';
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
                <div className='resume-card'>
                    <h2>Full Stack Developer</h2>
                    <p>
                        <p>
                            A dedicated Full Stack Developer with hands-on experience in building scalable web applications using
                            React, Node.js, Spring Boot, and modern tools. Completed a full-stack internship where I contributed to
                            real-world projects, collaborated in an Agile environment, and delivered features end-to-end. Strong in
                            problem-solving, DSA (Java), and team collaboration. Open to full-time roles and impactful opportunities.
                        </p>

                    </p>
                    <button onClick={() => handleDownload(fullStackResumePDF, 'Vishnu_Full_Stack_Resume.pdf')}>
                        Download PDF
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Resumes;