import React from 'react';
import { Link } from 'react-router-dom';
import '../Header.css'; // Optional: Create a separate CSS file for header styling

const Header = () => {
  return (
    <header className="header">
      <img src="/rp-logo.png" alt="Republic Polytechnic Logo" className="rp-logo" />
      <h1 className="header-title">Republic Polytechnic Course Enrollment Portal</h1>
      <nav>
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/diplomas">Diplomas</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/faqs">FAQs</Link></li> {/* Added FAQs link */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
