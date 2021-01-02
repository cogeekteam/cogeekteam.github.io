import React from "react";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";

function CogeekFooter(props) {
  return (
    <div className="pt-5 pb-5 bg-cogeek cgk-footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <Link to="/">
              <img src={logo} height="70px" alt="" />
            </Link>
            <p className="cgk-copyright mt-3">
              Copyright &copy; 2021 Cogeek. All rights reserved.
            </p>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-4">
                <div>
                  <Link to="/contact">Contact us</Link>
                </div>
                <div>
                  <Link to="/about-us">About us</Link>
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  <Link to="/term-condition">Terms & Conditions</Link>
                </div>
                <div>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </div>
              </div>
              <div className="col-md-4 follow-cgk">
                <p className="text-white mb-0">Follow us</p>
                <a
                  href="https://www.facebook.com/cogeek.page/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  href="https://twitter.com/Cogeek_Team"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CogeekFooter;
