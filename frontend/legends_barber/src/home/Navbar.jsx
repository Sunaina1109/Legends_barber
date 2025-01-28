import React, { useState } from "react";
import "../App.css";

function Navbar() {
  return (
    // <div className="container">
    <nav class="nav-container">
      <div class="nav">
        <div>
          <a>
            {" "}
            <img src=".\image\B-Logo.svg" alt="logo" className="E-logo" />
          </a>
          <span className="span">Ladies </span><span className="span1">&</span><span className="span2"> Gentleman</span>
        </div>
        <div>
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`nav-list ${menuOpen ? "open" : ""}`}>

        <a className="offer">
              <p>Offer</p>
            </a>
            
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Price
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Stores
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Store 1
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Store 2
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Store 3
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Hair Serivces
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Beauty Services
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">
                Gallery
              </a>
            </li>
            <li><button class="Button" type="submit">
            Get Appointment!
          </button></li>

          </ul>
        </div>

      </div>
      {/* </div> */}
    </nav>
    // </div>
  );
}

export default Navbar;