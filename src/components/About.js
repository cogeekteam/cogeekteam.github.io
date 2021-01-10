import React from "react";
import imgAbout from "../assets/img/who-is-cogeek.jpg";

import bgAboutus from "../assets/img/who-is-cogeek.jpg";
import cogeekTeam from "../assets/img/cogeek-team.svg";

function About(props) {
  return (
    <article>
      {/* <header
        className="section cgk-about"
        style={{
          backgroundImage:
            "linear-gradient(171.69deg,rgba(39, 28, 0, 0.5) 15%,rgba(255, 186, 8, 0) 87.25%)," +
            "url(" +
            bgAboutus +
            ")",
        }}
      >
        <h1 className="text-center font-weight-light text-capitalize text-white">
          cogeek team
        </h1>

        <p
          className="text-center font-weight-light text-white"
          style={{ fontSize: 20 }}
        >
          "We only fail when we stop trying"
        </p>
        <img className="arrow-object" src={arrowObj}></img>
      </header> */}
      <section
        id="scroll-target-about"
        className="section min-vh-100 pt-5 about-us"
      >
        <div className="container">
          <h1 className="font-weight-light text-center mb-0">
            Who <b>We Are</b>
          </h1>
          <hr className="break-small"></hr>
          <div className="row justify-content-center align-items-center">
            {/* <div className="col-md-6 mb-3">
            <img width="100%" src={imgAbout}></img>
          </div> */}
            <div className="col-md-6">
              <img width="100%" src={cogeekTeam}></img>
            </div>
            <div className="col-md-6">
              <p>
                We are a dynamic team with a mission of bringing effective
                mobile apps, make your life better.
              </p>
              <p>
                We also give students opportunities to experience motivated and
                creative working environment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

export default About;
