import React from 'react';
import './Admission.css';
/*import admission_img from '../../assets/admission_banner.jpg';*/

const Admission = () => {
  return (
    <section className="admission">
      <div className="admission-banner">
        
      </div>
      <div className="admission-content">
        <h2>Admission Open</h2>
        <p>
          We welcome students to join our school. Our admission process is simple
          and transparent. Apply now to secure a place for your child in our
          upcoming academic session.
        </p>
        <button className="btn-apply">Apply Now</button>
      </div>
    </section>
  );
};

export default Admission;
