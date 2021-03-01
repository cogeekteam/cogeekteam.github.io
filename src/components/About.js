import React from "react";
// import imgAbout from "../assets/img/who-is-cogeek.jpg";
// import bgAboutus from "../assets/img/who-is-cogeek.jpg";
import cogeekTeam from "../assets/img/cogeek-team.svg";
import quote from "../assets/img/quote.svg";
function About(props) {
  return (
    <>
      <section
        id="scroll-target-about"
        className="section min-vh-100 pt-5 about-us"
      >
        <div className="container">
          <h1 className="font-weight-light text-center mb-0">
            Who <b>We Are</b>
          </h1>
          <hr className="break-small"></hr>
          <div className="row justify-content-center align-items-center content">
            <div className="col-md-6 text-md-left text-center">
              <img alt="quote-cogeek" className="mb-3" width="40" src={quote} />
              <p>
                We are a small team with a big passion for mobile development.
              </p>
              <p></p>
              <p>
                Instead of inventing an app, we learn, try and see how hard
                would it be to implement an app.
              </p>
              <p>
                With all our efforts, we hope to be able to develop our own
                ideas in the future, bring the best for life.
              </p>
            </div>
            <div className="col-md-6 col-12 text-center">
              <img alt="cogeek dev team" width="100%" src={cogeekTeam}></img>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
