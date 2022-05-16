import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./style/header.css";
function Header() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="navbar-bg">
      <div className="container">
        <nav className="navbar">
          <Link className="text-decoration-none" to="/">
            <span style={{ color: "#fbc41f" }} className="fs-4 fw-bold">
              <span>Be</span>Expo
            </span>
          </Link>
          <ul
            className={isMobile ? "nav-links-mobile" : "nav-links"}
            onclick={() => setIsMobile(false)}
          >
            <Link className="home" to="/">
              <li>Home</li>
            </Link>
            <Link className="bee" to="/bee">
              <li>Bee</li>
            </Link>
            <Link className="honey" to="/honey">
              <li>Honey</li>
            </Link>
            <Link className="ingredients" to="/ingredients">
              <li>Ingredients</li>
            </Link>
            <Link className="contact" to="/contact">
              <li>Contact</li>
            </Link>
          </ul>
          <button
            className="mobile-menu-icon navbar-bg"
            onClick={() => setIsMobile(!isMobile)}
          >
            {isMobile ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fas fa-bars"></i>
            )}
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Header;
