import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Nav, Button, Container, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from "../../assets/logo/logo.png";
import './Header.css';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false); // State for dropdown visibility
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false); // Close the menu after navigation
  };

  const handleDropdownItemClick = (path) => {
    navigate(path);
    setDropdownOpen(false); // Close the dropdown after navigation
  };

  return (
    <header className="header">
      <div className="container-sign-btn">
        <Button className="signup-btn" onClick={() => handleNavigation("/signup")}>
          Sign Up
        </Button>
        <Button className="signin-btn" onClick={() => handleNavigation("/signin")}>
          Sign In
        </Button>
      </div>
      <Container>
        <div className="header-container">
          <Link to="/">
            <img src={logo} alt="portfolio-logo" className="logo" />
          </Link>
          <h1 className="header-title">My Portfolio</h1>
          <button className="menu-toggle" onClick={toggleMenu}>
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>
          <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/" onClick={toggleMenu}>Home</Nav.Link>
              <Nav.Link as={Link} to="/skills" onClick={toggleMenu}>Skills</Nav.Link>
              <Nav.Link as={Link} to="/projects" onClick={toggleMenu}>Projects</Nav.Link>
              <NavDropdown
                title="About"
                id="nav-dropdown"
                onMouseEnter={toggleDropdown}
                onMouseLeave={toggleDropdown}
                show={isDropdownOpen}
              >
                <NavDropdown.Item onClick={() => handleDropdownItemClick("/services")}>
                  Services
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleDropdownItemClick("/profile-info")}>
                  Profile Info
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleDropdownItemClick("/isaac-in-brief")}>
                  Isaac In Brief
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleDropdownItemClick("/success-and-excellence")}>
                  Success and Excellence
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleDropdownItemClick("/marital-status")}>
                  Marital Status
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/contact" onClick={toggleMenu}>Contact</Nav.Link>
            </Nav>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
