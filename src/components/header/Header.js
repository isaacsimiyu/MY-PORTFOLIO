import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Container, NavDropdown } from 'react-bootstrap';
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
            <ul>
              <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
              <li><Link to="/skills" onClick={toggleMenu}>Skills</Link></li>
              <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
              <li
                className="nav-item dropdown"
                onMouseEnter={toggleDropdown}
                onMouseLeave={toggleDropdown}
              >
                <span className="nav-link dropdown-toggle">About</span>
                {isDropdownOpen && (
                  <div className="dropdown-menu show">
                    <NavDropdown.Item onClick={() => handleDropdownItemClick("/home")}>
                      Services
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={() => handleDropdownItemClick("/home")}>
                      Profile Info
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={() => handleDropdownItemClick("/home")}>
                      Isaac In Brief
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={() => handleDropdownItemClick("/home")}>
                      Success and Excellence
                    </NavDropdown.Item>
                  </div>
                )}
              </li>
              <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
