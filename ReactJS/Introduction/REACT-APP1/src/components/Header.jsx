import React from 'react';
import logo from '../assets/images/logo.png';

const Header = () => {
  return (
    <>
      <div id="navbar">
        <div id="nav1">
          <ul>
            <li>
              <a href="#">Home</a>
              <a href="#">Contact</a>
              <a href="#">About</a>
            </li>
          </ul>
        </div>
        <div id="nav2">
          <img
            src={logo}
            alt="Logo Image"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
