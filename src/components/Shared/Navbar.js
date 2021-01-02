import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../logo.svg";
function Navbar(props) {
  return (
    <nav
      className="navbar fixed-top navbar-expand-md topbar navbar-dark bg-cogeek p-0"
      id="navi-top"
    >
      <div className="container">
        <button
          className="navbar-toggler m-2"
          type="button"
          data-toggle="collapse"
          data-target="#menu-top"
          aria-controls="menu-top"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <NavLink className="navbar-brand pt-3 pb-3" to="/">
          <img src={logo} height="40px" alt="" />
        </NavLink>
        <div className="collapse navbar-collapse" id="menu-top">
          <div className="col-md-12">
            <ul className="navbar-nav justify-content-end">
              <li className="nav-item ml-3 mr-3">
                <NavLink
                  exact
                  activeClassName="active"
                  className="nav-link nav-home"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item ml-3 mr-3">
                <NavLink
                  activeClassName="active"
                  className="nav-link nav-intro"
                  to="/service"
                >
                  Service
                </NavLink>
              </li>
              <li className="nav-item ml-3 mr-3">
                <NavLink
                  activeClassName="active"
                  to="/about-us"
                  className="nav-link nav-service"
                >
                  About us
                </NavLink>
              </li>
              <li className="nav-item ml-3 mr-3">
                <NavLink
                  activeClassName="active"
                  className="nav-link nav-contact"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
