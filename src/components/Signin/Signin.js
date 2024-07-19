/* global FB */

import React, { useState, useEffect } from 'react';
import './Signin.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

const SignIn = () => {
  const [userNameOrEmail, setUserNameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loadFacebookSDK = () => {
      window.fbAsyncInit = function() {
        FB.init({
          appId: 'YOUR_FACEBOOK_APP_ID',
          cookie: true,
          xfbml: true,
          version: 'v12.0'
        });
      };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    };

    loadFacebookSDK();
  }, []);

  const handleUserNameOrEmailChange = (e) => {
    setUserNameOrEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Minimum eight characters, at least one letter and one number

    if (!userNameOrEmail) {
      newErrors.userNameOrEmail = 'User Name or Email is required';
    } else if (!emailRegex.test(userNameOrEmail)) {
      newErrors.userNameOrEmail = 'Invalid email format';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (!passwordRegex.test(password)) {
      newErrors.password = 'Password must be at least 8 characters long and include at least one letter and one number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (validateForm()) {
      axios.post('/signin', { userNameOrEmail, password })
        .then(response => {
          localStorage.setItem('token', response.data.token);
          navigate('/dashboard');
        })
        .catch(error => {
          setErrors({ ...errors, form: error.response?.data?.msg || 'Sign In failed. Please try again.' });
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  };

  const handleGoogleLoginSuccess = (response) => {
    axios.post('/google-signin', { token: response.credential })
      .then(response => {
        localStorage.setItem('token', response.data.token);
        navigate('/dashboard');
      })
      .catch(error => {
        setErrors({ ...errors, form: 'Google Sign-In failed. Please try again.' });
      });
  };

  const handleGoogleLoginFailure = (response) => {
    setErrors({ ...errors, form: 'Google Sign-In failed. Please try again.' });
  };

  const handleFacebookLogin = () => {
    FB.login(response => {
      if (response.authResponse) {
        const { accessToken, userID } = response.authResponse;
        axios.post('/facebook-signin', { accessToken, userID })
          .then(response => {
            localStorage.setItem('token', response.data.token);
            navigate('/dashboard');
          })
          .catch(error => {
            setErrors({ ...errors, form: 'Facebook Sign-In failed. Please try again.' });
          });
      } else {
        setErrors({ ...errors, form: 'Facebook Sign-In failed. Please try again.' });
      }
    }, { scope: 'email' });
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit} className="signin-form">
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
          {isLoading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>
      <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
        <GoogleLogin
          onSuccess={handleGoogleLoginSuccess}
          onFailure={handleGoogleLoginFailure}
          buttonText="Sign in with Google"
        />
      </GoogleOAuthProvider>
      <button onClick={handleFacebookLogin} disabled={isLoading}>
        Sign in with Facebook
      </button>
      {errors.form && <p className="error-message">{errors.form}</p>}
    </div>
  );
};

export default SignIn;
