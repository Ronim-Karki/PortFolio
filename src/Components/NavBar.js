import React from 'react';
import { FaBars } from 'react-icons/fa';

import Logo from '../img/logo.png';
// import Moon from '../img/moon.png';
export default function NavBar() {
  return (
    <div>
      <nav className="nav">
        <button className="nav__sidebar-toggle">
          <FaBars />
        </button>
        {/* <img src={Moon} className="particles__moon" alt="Moon" /> */}
        <img src={Logo} className="particles__logo" alt="logo" />
        <ul className="nav__list">
          <li>Home</li>
          <li>
            <a href="#container">Portfolio</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#about">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="wrapper">
        <h1 className="wrapper__description">
          Hi,
          <span className="wrapper__text">
            I'm &nbsp;
            <span className="wrapper__dynamic-texts">
              Ronim karki, a web developer and motivated person.
            </span>
          </span>
        </h1>
      </div>
    </div>
  );
}
