// The Header
import React from 'react';
import { Link } from 'react-router-dom';
import './Header';

function Header(){
  return (
    <header>
      <Link to="/" className="header-link">
      <h1>Audra's Cook Book</h1>
      </Link>
      <nav>
        {/* The header Holds a link to the main page*/}
      </nav>
    </header>
  );
};

export default Header;
