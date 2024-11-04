// src/pages/About.tsx
import React from 'react';
import '../style/About.css';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <div className="left-content">
        <h1 className="big-phrase">This is a Big Phrase</h1>
      </div>
      <div className="right-content">
        <p>Placeholder for additional content</p>
      </div>
    </div>
  );
};

export default About;