import React from "react";
import happy from "../../assets/img/happy.jpg";

function Section1(props) {
  return (
    <section>
      <div className="container-fluid w-100 section1">
        <div className="row align-content-center">
          <div className="col-lg-4 col-md-6 col-12 p-0">
            <img width="100%" src={happy}></img>
          </div>
          <div className="col-lg-8 col-md-6 col-12 p-5">
            <div className="d-flex justify-content-center flex-column h-100">
              <h1>We only fail when we stop trying</h1>
              <p>
                If you want to join or contribute to Cogeek Team, please contact
                us via{" "}
                <a target="_blank" href="mailto:cogeek.contact@gmail.com">
                  <i className="fad fa-mouse-alt"></i> cogeek.contact@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1;
