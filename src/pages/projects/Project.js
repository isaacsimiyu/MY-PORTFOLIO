import React from 'react';
import './Project.css';
import Footer from '../../components/footer/Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImages,
  faBook,
  faStar,
  faHeart,
  faGlobe,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    title: "Networking Project",
    description: "A project demonstrating my skills in network setup and management.",
    icon: faGlobe
  },
  {
    title: "Graphic Design Project",
    description: "A design project showcasing my creativity and design skills.",
    icon: faImages
  },
  {
    title: "Programming Project",
    description: "A software application I developed using modern programming techniques.",
    icon: faStar
  },
  {
    title: "Data Management Project",
    description: "An example of my ability to manage and analyze large datasets.",
    icon: faBook
  },
  {
    title: "System Management Project",
    description: "A project showcasing my expertise in system administration and management.",
    icon: faUsers
  },
  {
    title: "Database Management Project",
    description: "A comprehensive database management system I designed and implemented.",
    icon: faHeart
  }
];

const Project = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <h3><FontAwesomeIcon icon={project.icon} /> {project.title}</h3>
            <p><FontAwesomeIcon icon={project.icon} /> {project.description}</p>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Project;
