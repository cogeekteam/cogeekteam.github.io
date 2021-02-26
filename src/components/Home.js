import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import CustomParticles from "./Shared/CustomParticles";
import "../App.css";
// import Navigation from "./Shared/Navigation";
import background from "../assets/img/cogeek-home-header-background.jpg";
class Home extends React.Component {
  render() {
    return (
      <section id="scroll-target-home">
        <div
          className="vh-100 cgk-home-header text-center"
          style={{
            backgroundImage:
              "linear-gradient(102.25deg,rgba(32, 35, 42, 0.7) 0%,rgba(32, 35, 42, 0.2) 100%)," +
              "url(" +
              background +
              ")",
          }}
        >
          <p className="cgk-home-head-title">Mobile apps development team</p>
        </div>
        <CustomParticles />
      </section>
    );
  }
}

export default Home;
