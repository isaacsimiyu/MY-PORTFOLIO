import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';

const Signup = () => {
  const [userNameOrEmail, setUserNameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleUserNameOrEmailChange = (e) => {
    setUserNameOrEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validateForm = () => {
    const newErrors = {};
    const userNameOrEmailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$|^[a-zA-Z0-9_]{3,15}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!userNameOrEmailRegex.test(userNameOrEmail)) {
      newErrors.userNameOrEmail = 'Must be a valid email or username (3-15 characters, letters, numbers, and underscores).';
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
      axios.post('/signup', { userNameOrEmail, password })
        .then(response => {
          setIsSuccess(true);
          setIsLoading(false);
        })
        .catch(error => {
          setErrors({ ...errors, form: error.response.data.msg });
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label htmlFor="userNameOrEmail"></label>
          <input
            type="text"
            placeholder="User Name Or Email"
            value={userNameOrEmail}
            onChange={handleUserNameOrEmailChange}
            disabled={isLoading}
          />
          {errors.userNameOrEmail && <span className="error">{errors.userNameOrEmail}</span>}
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
          {isLoading ? 'Signing up...' : 'Sign Up'}
        </button>
      </form>
      {isSuccess && <p className="success-message">Successfully signed up!</p>}
      {errors.form && <p className="error-message">{errors.form}</p>}
    </div>
  );
};

export default Signup;
