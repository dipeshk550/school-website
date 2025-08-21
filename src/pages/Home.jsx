import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Programs from '../components/Programs';
import Achievements  from '../components/Achievements';
import Events from '../components/Events';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Admission from '../components/Admission';


const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      < About />
      <Programs />
      <Achievements />
      < Events />
      < Admission/>
      < Contact/>
      < Footer/>
    

  
    </div>
  );
};

export default Home;
