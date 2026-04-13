import React from "react";
import { Link } from "react-router-dom";
import Logo from "/Logo.jpg";

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={Logo} alt="Standard Pencil Logo" />
      </Link>
      <nav className="navbar-nav">
        <Link className="navbar-nav-link">About Us</Link>
        <Link className="navbar-nav-link">Capabilities</Link>
        <Link className="navbar-nav-link">Products</Link>
        <Link className="navbar-nav-link">Quality</Link>
        <Link className="navbar-nav-link">Who we work with</Link>
        <Link className="primary-button">
          <p>Talk to us</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <mask
              id="mask0_205_44"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="20"
              height="20"
            >
              <rect width="20" height="20" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_205_44)">
              <path
                d="M7.01659 16.6667L5.83325 15.4833L11.3166 10L5.83325 4.51667L7.01659 3.33333L13.6833 10L7.01659 16.6667Z"
                fill="#111111"
              />
            </g>
          </svg>
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
