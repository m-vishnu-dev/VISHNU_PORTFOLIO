import React from 'react';
import './Resumes.css';
import Vishnu_Vardhan_Product from '../assets/MANDA-VISHNU-VARDHAN-REDDY-productmanger (2).pdf';
import fullStackResumePDF from '../assets/manda_vishnu_vardhan_reddy_resume.pdf';

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
            <h1>Resumes</h1>

            <div className='resume-container'>
                <div className='resume-card'>
                    <h2>Full Stack Developer</h2>
                    <p>
                        A highly motivated and collaborative professional with a proven ability to lead and manage time effectively.
                        Seeking an opportunity to apply my strong problem-solving skills and dedication to team collaboration to
                        contribute to impactful projects within a forward-thinking organization.

                    </p>
                    <button onClick={() => handleDownload(fullStackResumePDF, 'Vishnu_Vardhan_Full_Stack_Resume.pdf')}>
                        Download PDF
                    </button>
                </div>
                <div className='resume-card'>
                    <h2>Product Manager</h2>
                    <p>
                        Aspiring Product Manager with a strong foundation in full-stack development and a passion for
                        building user-centric solutions. Eager to leverage my technical expertise and problem-solving skills to
                        bridge the gap between users and engineering, define product vision, and contribute to the entire
                        product lifecycle in an innovative organization.
                    </p>
                    <button onClick={() => handleDownload(Vishnu_Vardhan_Product, 'Vishnu_Vardhan_Product-Manager_Resume.pdf')}>
                        Download PDF
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Resumes;