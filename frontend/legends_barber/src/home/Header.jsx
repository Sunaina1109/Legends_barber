import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import { useModal } from "../context/ModalContext";
import { Link } from "react-router-dom";

function Navbar() {
  const { openModal } = useModal();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); // Reference to the menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to close menu if clicked outside
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="nav-container">
      <div className="nav">
        <div className="logo-container">
          <a href="/">
            <img src="./image/B-Logo.svg" alt="logo" className="E-logo" />
          </a>
          <span className="span">Unisex </span>
          <span className="span2"> Salon</span>
        </div>
        <div className="list-menu" ref={menuRef}>
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
                  <Link className="dropdown-item" to="/porto-studio">
                    Porto Studio
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/matosinhos-studio">
                    Matosinhos Studio
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/aveiro-studio">
                    Aveiro Studio
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/photos">
                Gallery
              </Link>
            </li>
            <li>
              <button onClick={openModal} className="Button" type="submit">
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
