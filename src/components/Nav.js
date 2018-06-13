import React from 'react';
import { Link } from 'react-router-dom';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Nav = props => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">
          LOGO
        </Link>
      </div>
      <ul className="nav navbar-nav">
        <li
          className={
            window.location.pathname === '/' || window.location.pathname === '/'
              ? 'active'
              : ''
          }
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className={window.location.pathname === '/portfolio' ? 'active' : ''}
        >
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className={window.location.pathname === '/resume' ? 'active' : ''}>
          <Link to="/resume">Resume</Link>
        </li>
        <li className={window.location.pathname === '/library' ? 'active' : ''}>
          <Link to="/library">Library</Link>
        </li>
        <li className={window.location.pathname === '/contact' ? 'active' : ''}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
