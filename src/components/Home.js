import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../App.css";
// import Navigation from "./Shared/Navigation";
import { Link } from "react-router-dom";
import background from "../assets/img/cogeek-home-header-background.jpg";
class Home extends React.Component {
  render() {
    return (
      <div>
        {/* <Navigation id="navi-top" /> */}
        <div
          className="vh-100 cgk-home-header text-center"
          style={{
            backgroundImage:
              "linear-gradient(102.25deg,rgba(32, 35, 42, 0.9) 0%,rgba(32, 35, 42, 0.4) 100%)," +
              "url(" +
              background +
              ")",
          }}
        >
          {/* <p className="cgk-home-head-name">cogeek</p> */}
          <h1 className="text-white text-uppercase">make it possible</h1>
          <p className="cgk-home-head-title mt-5">
            Mobile apps development team in vietnam
          </p>
          <Link to="/" className="btn btn-cgk rounded-0 pl-5 pr-5 mt-3">
            See more
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
