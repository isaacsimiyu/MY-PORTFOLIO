import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginForm.css";
import API from "../../API/axios";
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

const LOGIN_URL = "/api/login";
const ADMIN_PAGE_URL = "/admin";
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const LoginForm = () => {
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    return () => {
      setErrMsg("");
    };
  }, []);

  const validatePassword = () => {
    if (!PASSWORD_REGEX.test(password)) {
      setPasswordError("Password must be at least 8 characters long and contain at least one letter and one number");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    validatePassword();

    if (!email || !password || passwordError) {
      setErrMsg("Please enter both email and password and ensure password is valid");
      setLoading(false);

      setTimeout(() => {
        setErrMsg("");
      }, 5000);

      return;
    }

    try {
      const response = await API.post(LOGIN_URL, {
        email,
        password,
      });

      const { authToken } = response?.data;

      localStorage.setItem("authToken", authToken);
      console.log("Login successful!");

      navigate(ADMIN_PAGE_URL);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Invalid email or password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
    }

    setLoading(false);

    setTimeout(() => {
      setErrMsg("");
    }, 5000);
  };

  return (
    <div className="login">
      <form className="login-form-container" onSubmit={handleSubmit}>
        <h1>Welcome Back</h1>
        <input
          type="email"
          id="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
          ref={emailInputRef}
        />
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            onBlur={validatePassword}
            className={`input-field ${passwordError ? "error" : ""}`}
            ref={passwordInputRef}
          />
          <i
            className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"} toggle-password`}
            onClick={() => setShowPassword(!showPassword)}
          ></i>
        </div>
        {passwordError && <p className="error">{passwordError}</p>}
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
        {errMsg && <p className="error">{errMsg}</p>}
        <div className="forgot-password-link">
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
