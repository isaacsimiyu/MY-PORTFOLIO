import React, { useState } from "react";
import './Skills.css';
import {Image, Container, Button, Col, Row} from "react-bootstrap";
import networkimg from "../../assets/skills/networkimg.jpg";
import database from "../../assets/skills/database.jpg";
import dataimg from "../../assets/skills/dataimg.jpg";
import systemimg from "../../assets/skills/systemimg.jpg";
import programimg from "../../assets/skills/programimg.jpg";
import graphicimg from "../../assets/skills/graphicimg.jpg";
import Footer from '../../components/footer/Footer';

const Skill = ({image, title, description}) => {
  const [isDescriptionVisible,setDescriptionVisible]= useState(false)

  const toggleDescription  = () => {
    setDescriptionVisible(!isDescriptionVisible);
  };

  return (
    <Col md={4} ms={6} mx={3} className="skills">
    <Image src={image}alt={title} fluid/>
    <div className="skill-description">
      <h4>{title}</h4>
      {isDescriptionVisible && <p>{description}</p>}
      <Button onClick={toggleDescription} variant="primary">
        {isDescriptionVisible ? "Hide description": "Read more"}
      </Button>
    </div>
    </Col>
  );

  };
   
  const Skills = () => {
    return (
      <>
        
        <section className="section-with-image">
        <div className="background-image"></div>
        <h1>Skills</h1>
      </section>
      <section className="Skills">
          <Container>
            <Row>
              <Skill
                image={networkimg}
                title="Networking"
                description="Expertise in network setup, configuration, and troubleshooting. Experienced with network protocols, firewall configurations, and network security. Computer networking involves connecting multiple computing devices to share resources and information. It is the practice of interconnecting computers, servers, and other devices using various hardware and software technologies to facilitate communication and resource sharing. Here are the key components and concepts of computer networking" />
              <Skill
                image={programimg}
                title="Programming"
                description="Proficient in multiple programming languages including Java, Python, C++, and JavaScript. Skilled in developing applications, software, and scripts. Computer programming is the process of designing, writing, testing, and maintaining code that enables computer software and applications to function. It involves creating sets of instructions that a computer can execute to perform specific tasks. Here are key components and concepts of computer programming" />
              <Skill
                image={dataimg}
                title="Data Management"
                description="Experience in data modeling, ETL processes, and data analysis. Proficient with SQL, NoSQL databases, and big data technologies." />
              <Skill
                image={systemimg}
                title="System Management"
                description="Skilled in system administration, including server setup, maintenance, and monitoring. Familiar with various operating systems and virtualization technologies." />
              <Skill
                image={database}
                title="Database Management"
                description="Expertise in database design, development, and optimization. Experienced with relational databases such as MySQL, PostgreSQL, and Oracle." />
                 <Skill
                image={graphicimg}
                title="Graphic Design"
                description="Compitant and expert in Graphic designing with diversity skill. Is the art and practice of planning and projecting ideas and experiences with visual and textual content. It involves creating visual content to communicate messages through various mediums such as print, digital media, and advertising. Here are key aspects of graphic designing." />
            </Row>

          </Container >
          </section>
          
          <Footer />
          </>
    );
  };
    

export default Skills;
