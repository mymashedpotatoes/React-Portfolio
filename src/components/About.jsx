import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div>
      <h3>About page</h3>
      <div className='about-content'>
        <img src='./images/pfp.jpeg' alt='Profile picture'></img>
        <div className='text-content'>
          <p>Hello!</p>
          <p>This is my React portfolio page. I am currently 22 years old and in the process of getting a Full Stack Web Development certificate through Rice University Coding Bootcamp.
            I am originally from California but live in Houston, Texas right now.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;