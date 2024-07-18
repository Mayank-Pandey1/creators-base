import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="navbar-left">
      <Link to="/" className="navbar-logo">
        <img src="path/to/logo.png" alt="Crunchbase Clone Logo" />
      </Link>
      <div className="navbar-search">
        <input type="text" placeholder="Search for companies, people, and more" />
      </div>
    </div>
    <div className="navbar-right">
      <Link to="/discover" className="navbar-link">Discover</Link>
      <Link to="/categories" className="navbar-link">Categories</Link>
      <Link to="/pricing" className="navbar-link">Pricing</Link>
      <Link to="/login" className="navbar-link">Login</Link>
      <Link to="/signup" className="navbar-link navbar-signup">Sign Up</Link>
    </div>
  </nav>
  );
}

export default Navbar;
