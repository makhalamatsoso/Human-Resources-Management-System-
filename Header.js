import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; 
const Header = () => {
  return (
    <header>
      <nav>
        <h1>HRMS Dashboard</h1>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/staff">Staff Management</Link></li>
          <li><Link to="/procurement">Procurement Management</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
