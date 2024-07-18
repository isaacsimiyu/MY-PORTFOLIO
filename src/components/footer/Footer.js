import React from 'react';
import './Footer.css';
import {Container, Col, Row} from 'react-bootstrap';
  import logo from "../../assets/logo/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} My Portfolio</p>
        <p>
          Contact me at: <a href="mailto:isaacsimiyu757@gmail.com">isaacsimiyu757@gmail.com</a>
        </p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/isaac-simiyu-736847301/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/isaacsimiyu" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://twitter.com/isaacsimiyu" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
        <Row>
          <Col md={3} sm={6} xs={12} className="footer-col">
          <div className="footer-log">
            <img src={logo} alt="portifolio logo"/>
          </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
