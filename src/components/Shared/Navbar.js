import React from "react";
import { a } from "react-router-dom";
import logo from "../../logo.svg";
function Navbar(props) {
  return (
    <nav
      className="navbar fixed-top navbar-expand-md topbar navbar-dark p-0"
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
        <a className="navbar-brand" href="/">
          <img src={logo} height="40px" alt="" />
        </a>
        <div className="collapse navbar-collapse" id="menu-top">
          <div className="col-md-12">
            <ul className="navbar-nav justify-content-end text-uppercase">
              <li className="nav-item ml-3 mr-3">
                <a className="nav-link nav-home" href="#scroll-target-home">
                  Home
                </a>
              </li>
              {/* <li className="nav-item ml-3 mr-3">
                <a
 
                  className="nav-link nav-intro"
                  href="/service"
                >
                  Service
                </a>
              </li> */}
              <li className="nav-item ml-3 mr-3">
                <a href="#scroll-target-about" className="nav-link nav-about">
                  About us
                </a>
              </li>
              <li className="nav-item ml-3 mr-3">
                <a
                  className="nav-link nav-contact"
                  href="#scroll-target-contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
