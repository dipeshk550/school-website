import React from 'react';
import './About.css';
import schoolImage from '../assets/school.jpg'; // Replace with your school image

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image">
          <img src={schoolImage} alt="School" />
        </div>
        <div className="about-content">
          <h2>About Our School</h2>
          <p>
            Welcome to Kidland School, where excellence in education meets a nurturing environment. 
            Our mission is to provide quality education and holistic development for every student.
          </p>
          <ul>
            <li><strong>Mission:</strong> Empower students with knowledge, values, and skills.</li>
            <li><strong>Vision:</strong> To become a leading institution known for academic and personal growth.</li>
            <li><strong>Values:</strong> Integrity, Respect, Excellence, Creativity.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
