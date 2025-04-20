import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md border-bottom bg-white">
      <div className="container p-2">
        {/* Logo */}
        <Link className="navbar-brand" to={"/"}>
          <img src="media/image/logo.svg" className="img-fluid" style={{ width: "120px" }} alt="logo_image" />
        </Link>

        {/* Toggle Button for Mobile View */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to={"/singup"}>Signup</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/about"}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/products"}>Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/pricing"}>Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/support"}>Support</Link>
            </li>
            <li className="nav-item d-s-none">
              <a className="nav-link" href="#">
                <i className="fa-solid fa-bars"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
