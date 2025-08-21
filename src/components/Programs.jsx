/*import React from "react";
import './Programs.css';

const programs= [
    {title: 'Primary Education', description: 'Quality education for grades 1 to 5.' },
    {title: 'Secondary Education', description: 'Comprehensive curriculum for grades 6 to 10'},
    {title: 'Science & Technology', description: 'Encouraging STEM and innovation.' },
  { title: 'Arts & Sports', description: 'Creative programs for holistic development.' },
];

const Programs = () => {
    return(
        <section className="programs" id="programs">
            <h2>Our Programs</h2>
            <div className="programs-container">
                {programs.map((program, index)=>(
                    <div className="program-cards" key={index}>
                        <h3>{program.title}</h3>
                        <p>{programs.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Programs;*/
import React from 'react';
import './Programs.css';

const programs = [
  { title: 'Primary Education', description: 'Quality education for grades 1 to 5.' },
  { title: 'Secondary Education', description: 'Comprehensive curriculum for grades 6 to 10.' },
  { title: 'Science & Technology', description: 'Encouraging STEM and innovation.' },
  { title: 'Arts & Sports', description: 'Creative programs for holistic development.' },
];

const Programs = () => {
  return (
    <section className="programs" id="programs">
      <h2>Our Programs</h2>
      <div className="programs-container">
        {programs.map((program, index) => (
          <div className="program-card" key={index}>
            <h3>{program.title}</h3>
            <p>{program.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;
