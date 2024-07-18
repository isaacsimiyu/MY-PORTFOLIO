import React from 'react';
import './About.css';
import Footer from '../../components/footer/Footer';

const About = () => {
  return (
    <div className="about">
      <h2>About Me</h2>
      <p>
        I am a dedicated Computer Scientist with a passion for technology and innovation. My expertise lies in the following areas:
      </p>
      <ul>
        <li>Networking: Expertise in network setup, configuration, and troubleshooting.</li>
        <li>Programming: Proficient in multiple programming languages including Java, Python, C++, and JavaScript.</li>
        <li>Data Management: Skilled in data modeling, ETL processes, and data analysis.</li>
        <li>System Management: Experienced in system administration, server setup, maintenance, and monitoring.</li>
        <li>Database Management: Expert in database design, development, and optimization.</li>
        <li>Graphic Designing: Creative graphic design skills for digital and print media.</li>
      </ul>
      <p>
        My goal is to leverage my skills to develop innovative solutions that solve real-world problems. With a strong foundation in both the technical and creative aspects of computer science, I am well-equipped to tackle a wide range of challenges.
      </p>
      <Footer/>
    </div>
    
  );
};

export default About;
