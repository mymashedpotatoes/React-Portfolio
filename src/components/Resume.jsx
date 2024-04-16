import React from 'react';
import '../styles/Resume.css';
import MyResume from '../utils/MyResume.pdf'

const Resume = () => {
  return (
    <div className='resume-container'>
      <h6>Proficiencies</h6>
      <p>HTML, CSS, JavaScript, React, MongoDB, MySQL, Express</p>
      <a href={MyResume} download='MyResume.pdf' target='_blank' rel='noopener noreferrer'>or download my resume here!</a>
    </div>
  );
};

export default Resume;