import React, { useState, useEffect } from 'react';
import './Home.css';
import Footer from '../../components/footer/Footer';
import home1 from "../../assets/home/home1.jpg";
import home2 from "../../assets/home/home2.jpg";
import home5 from "../../assets/home/home5.jpg";
import home8 from "../../assets/home/home8.jpg"
import home6 from "../../assets/home/home6.jpg";
import home11 from "../../assets/home/home11.jpg";
import home9 from "../../assets/home/home9.jpg";
import home10 from "../../assets/home/home10.jpg";
import home12 from "../../assets/home/home12.jpg";


const Home = () => {
  const [showBackground, setShowBackground] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [home1, home2, home5, home6, home8, home9, home11, home10, home12];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBackground(false);
    }, 6000);

    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Change image every second

    return () => {
      clearTimeout(timer);
      clearInterval(imageTimer);
    };
    
  }, []);

  return (
    <div className={`home ${showBackground ? 'show-background' : ''}`}>
      <header className="home-header">
        
        <h1>Welcome to My Portfolio..........</h1>
        <div className="image-container">
          <img src={images[currentImageIndex]} alt="Home" className="home-image" />
        </div>
        <p>
          I'm a Computer Scientist specializing in Networking, Graphic Designing, Programming, Data Management, System Management, and Database Management.
        </p>
      </header>
      
      <section className="home-section">
        <h2>About Me</h2>
        <p>
          With a passion for technology and creativity, I have gained extensive experience in various areas of computer science and design. My expertise spans across networking, graphic designing, programming, data management, system management, and database management.
        </p>
      </section>

      <section className="home-section">
        <h2>Skills</h2>
        <ul>
          <li>Networking</li>
          <li>Graphic Designing</li>
          <li>Programming</li>
          <li>Data Management</li>
          <li>System Management</li>
          <li>Database Management</li>
        </ul>
      </section>

      <section className="home-section">
        <h2>Projects</h2>
        <div className="project">
          <h3>Networking Project</h3>
          <p>A project demonstrating my skills in network setup and management.</p>
        </div>
        <div className="project">
          <h3>Graphic Design Project</h3>
          <p>A design project showcasing my creativity and design skills.</p>
        </div>
        <div className="project">
          <h3>Programming Project</h3>
          <p>A software application I developed using modern programming techniques.</p>
        </div>
        <div className="project">
          <h3>Data Management Project</h3>
          <p>An example of my ability to manage and analyze large datasets.</p>
        </div>
        <div className="project">
          <h3>System Management Project</h3>
          <p>A project showcasing my expertise in system administration and management.</p>
        </div>
        <div className="project">
          <h3>Database Management Project</h3>
          <p>A comprehensive database management system I designed and implemented.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
