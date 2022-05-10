import React from "react";
import { Link } from "react-router-dom";
import "./style/navbar.css";
function Navbar() {
  return (
    <div className="header-nav">
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 ">
          <Link
            to="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          >
            <span style={{ color: "#fbc41f" }} className="fs-4 fw-bold">
              <span>Be</span>Expo
            </span>
          </Link>

          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link to="/" className="nav-link" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/bee" className="nav-link">
                Bee
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/honey" className="nav-link">
                Honey
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/ingredients" className="nav-link">
                Ingredients
              </Link>
            </li>
            <li className="nav-item">
              <Link to="./contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </header>
      </div>
    </div>
  );
}

export default Navbar;
