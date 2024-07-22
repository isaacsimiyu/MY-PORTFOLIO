import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header'; // Adjust the path as necessary
import Home from './pages/home/Home';
import Skills from './pages/skills/Skills'; // Assuming you have these components
import Project from './pages/projects/Project';
import Contact from './pages/contact/Contact';
import Footer from './components/footer/Footer';
import About from './pages/about/About';
import SignUp from './components/Signup/Signup';
import SignIn from './components/Signin/Signin';
import ForgotPassword from './components/forgot-password/ForgotPassword';
import ResetPassword from './components/reset-password/ResetPassword';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Project />} />
          <Route path="contact/" element={<Contact />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/about" element={<About />} />
       <Route path="/SignUp" element={<SignUp/>}/>
       <Route path="/SignIn" element={<SignIn/>}/>
       <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
