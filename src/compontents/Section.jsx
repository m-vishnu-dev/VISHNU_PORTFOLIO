import React from 'react';
import './Section.css';

function Section({ title, children }) {
    return (
        <div className="section">
            <h1>{title}</h1>
            <div className="section-content">
                {children}
            </div>
        </div>
    );
}

export default Section;