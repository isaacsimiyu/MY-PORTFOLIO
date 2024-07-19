import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';
import Footer from '../../components/footer/Footer';
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Button, Container } from 'react-bootstrap';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [message, setMessage] = useState('');

  const validateEmail = (email) => {
    // Regular expression for validating email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsValidEmail(validateEmail(value));
  };

  const handleSignUp = () => {
    // Make sure email is not empty and valid
    if (!email || !isValidEmail) {
      setMessage("Please enter a valid email address.");
      return;
    }

    // Make a POST request to your backend endpoint
    axios
      .post("http://localhost:5000/api/newsletter/signup", { email }) // Send email to backend
      .then((response) => {
        if (response.status === 200) {
          setMessage("Successfully signed up for the newsletter!");
          setEmail(""); // Clear the email input field
        } else {
          setMessage(
            "Failed to sign up for the newsletter. Please try again later."
          );
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setMessage("An error occurred. Please try again later.");
      });
  };

  return (
    <>
      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <div className="contact-email">
          <a href="mailto:isaacsimiyu757@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} /> Email
          </a>
          <a href="https://wa.me/+254745323638">
            <FontAwesomeIcon icon={faPhone} /> WhatsApp
          </a>
        </div>

        <div className="map-container">
          <iframe
            title="Google Map"
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16006.828973287634!2d34.964849!3d0.8834421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178101c09e6f14e5%3A0x7f5184e9e1b6b8f7!2sKiminini%2C%20Kenya!5e0!3m2!1sen!2sus!4v1620744844217!5m2!1sen!2sus"
            width="1200"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <Container className="newstext-form">
          <div className="newstext">
            <p>Sign Up to our web</p>
          </div>
          <Col md={6} xs={12}>
            <div className="form">
              <input
                type="text"
                placeholder="Enter your Email"
                value={email}
                onChange={handleEmailChange}
                className={!isValidEmail ? "invalid" : ""}
              />
              {isValidEmail || !email ? null : (
                <p className="error-message">
                  Please enter a valid email address.
                </p>
              )}
              <Button className="normal" onClick={handleSignUp}>
                Sign Up
              </Button>
            </div>
            {message && <p>{message}</p>}
          </Col>
          </Container>
        </div>
        
      </section>
      <Footer />
    </>
  );
};

export default Contact;
