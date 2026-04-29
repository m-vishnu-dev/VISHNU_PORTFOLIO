import React from 'react';
import Section from './Section';
import './Education.css';

function Education() {
    const educationData = [
        {
            degree: "B.Tech in Information Technology",
            institution: "Malla Reddy University, Maisammaguda, Hyderabad",
            duration: "2022 – 2026",
            score: "CGPA: 8.19/10"
        },
        {
            degree: "Intermediate",
            institution: "Sri Chaitanya Jr College, Madinaguda, Hyderabad",
            duration: "2020 – 2022",
            score: "Percentage: 83.2%"
        },
        {
            degree: "10th Class",
            institution: "MNR High School, BHEL, Hyderabad",
            duration: "2020",
            score: "GPA: 9.3/10"
        }
    ];

    return (
        <Section title="Education">
            {educationData.map((edu, index) => (
                <div className="education-item" key={index}>
                    <h3>{edu.degree}</h3>
                    <p className="education-institution">{edu.institution}</p>
                    <p className="education-date">{edu.duration}</p>
                    <p className="education-score"><strong>{edu.score}</strong></p>
                </div>
            ))}
        </Section>
    );
}

export default Education;
