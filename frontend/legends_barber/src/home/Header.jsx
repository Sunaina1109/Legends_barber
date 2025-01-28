import React, { useState } from "react";
import "../App.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="nav-container">
      <div className="nav">
        <div className="logo-container">
          <a href='/'>
            <img src="./image/B-Logo.svg" alt="logo" className="E-logo" />
          </a>
          <span className="span">Ladies </span>
          <span className="span1">&</span>
          <span className="span2"> Gentleman</span>
        </div>
        <div className="list-menu">
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
          <li className="offer">
            <p>Offer</p>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Price
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Stores
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Store 1
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Store 2
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Store 3
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a 
            to='/Services'
              className="nav-link dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Services
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="/Services">
                  Hair Services
                </a>
              </li>
              <li>
              <a className="dropdown-item" href="/Services">
                  Hair Services
                </a>
              </li>
              <li>
              <a className="dropdown-item" href="/Services">
                  Hair Services
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">
              Gallery
            </a>
          </li>
          <li>
            <button className="Button" type="submit">
              Get Appointment!
            </button>
          </li>
        </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
