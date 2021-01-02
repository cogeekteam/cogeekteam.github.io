import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../App.css";
// import Navigation from "./Shared/Navigation";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div>
        {/* <Navigation id="navi-top" /> */}
        <div className="vh-100 cgk-home-header text-center">
          <p className="cgk-home-head-name">cogeek</p>
          <p className="cgk-home-head-title">
            Software development team in vietnam
          </p>
          <Link to="/contact" className="btn btn-cgk rounded-0 pl-3 pr-3 mt-3">
            Contact us
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
