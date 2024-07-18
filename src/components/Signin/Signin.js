import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signin.css';

const SignIn = ({ setIsSignedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!emailRegex.test(email)) {
      newErrors.email = 'Invalid email address.';
    }

    if (!passwordRegex.test(password)) {
      newErrors.password = 'Password must be at least 8 characters long and contain at least one letter and one number.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (validateForm()) {
      setTimeout(() => {
        setIsSignedIn(true);
        setIsSuccess(true);
        setIsLoading(false);
        navigate('/home'); // Navigate to a different page after successful sign-in
      }, 2000); // Simulating network delay
    } else {
      setIsLoading(false);
    }
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit} className="signin-form">
        <div className="form-group">
          <label htmlFor="email"></label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            disabled={isLoading}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="password"></label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            disabled={isLoading}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>
      {isSuccess && <p className="success-message">Successfully signed in!</p>}
    </div>
  );
};

export default SignIn;
