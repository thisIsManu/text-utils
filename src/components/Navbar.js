import React from "react";
import PropTypes from "prop-types";
import { toast, ToastContainer } from "react-toastify";
import {Link} from 'react-router-dom';


function Navbar({ title, aboutLabel, theme, themeToggle }) {
  return (
    <nav className={`navbar navbar-${theme} navbar-expand-lg nav bg-${theme}`}>
      <div className="container-fluid">
        <Link to="/textUtils" action  className="navbar-brand">
            {title}
        </Link>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/textUtils" action>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutUs" action >
                {aboutLabel}
              </Link>
            </li>
          </ul>
          <ToastContainer />
          <div
            className="form-check form-switch"
            style={{ color: `${theme === "light" ? "black" : "white"}` }}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={() => {
                document.body.style.backgroundColor =
                  theme === "light" ? "#4c2447" : "white";
                themeToggle((previosTheme) =>
                  previosTheme === "light" ? "dark" : "light"
                );
                toast("Theme changed Successfully !!");
              }}
            />
            <label
              className="form-check-label"
              for="flexSwitchCheckDefault"
            >{`Enable ${theme === "light" ? "Dark" : "Light"} Mode`}</label>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

Navbar.propTypes = {
  title: PropTypes.string,
  aboutLabel: PropTypes.string,
};
Navbar.defaultProps = {
  title: "TextUtils1",
  aboutLabel: "About1",
};
