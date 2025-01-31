import React, { useState } from "react";
import "../App.css";
import { useModal } from "../context/ModalContext";
import { Link } from "react-router-dom";


function Navbar() {
  const { openModal } = useModal();

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
          <span className="span">Unisex </span>
          <span className="span2"> Salon</span>
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
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/price">
              Price
            </Link>
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
                <Link className="dropdown-item" to="/porto">
                 Porto Salon
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/matosinhos">
                Matosinhos Salon
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/aveiro">
                  Aveiro Salon
                </Link>
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
                  Skin Care
                </a>
              </li>
              <li>
              <a className="dropdown-item" href="/Services">
                  Nail Arts
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/photos">
              Gallery
            </Link>
          </li>
          <li>
            <button onClick={openModal}  className="Button" type="submit">
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
