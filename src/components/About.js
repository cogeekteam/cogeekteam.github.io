import React from "react";
import imgAbout from "../assets/img/who-is-cogeek.jpg";
import avtNghia from "../assets/img/nghia-nguyen-huu.png";
import avtMinh from "../assets/img/minh-vuong.png";
import avtHoaiY from "../assets/img/hoai-y-pham.png";
import avtNam from "../assets/img/nam-hoang.png";
import arrowObj from "../assets/img/arrow-object.svg";

function About(props) {
  return (
    <article>
      <header className="section cgk-about">
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
      </header>
      <section className="section">
        <div className="container" style={{ paddingTop: 150 }}>
          <div className="row mt-4">
            {/* <div className="col-md-6 mb-3">
            <img width="100%" src={imgAbout}></img>
          </div> */}
            <div className="col-md-6 mb-3 pl-md-5 pr-md-5">
              <h4>Who we are</h4>
              <p>
                We are a dynamic team with a big dream of creating the best
                productivity softwares for everyone.
              </p>
              <h4>What we do</h4>
              <p>
                We make people come close to technology easily, improve their
                work performance.
              </p>
              <p>
                Additionally, We give students opportunities to experience
                professional, motivated and creative working environment.
              </p>
            </div>
          </div>
          <div className="mb-5">
            <h1
              className="text-center font-weight-light"
              style={{ paddingTop: 200 }}
            >
              Our Team
            </h1>
            <div className="row justify-content-center mt-4 mb-4">
              <div className="team_card">
                <div className="member_image">
                  <img width="100%" src={avtNghia}></img>
                </div>
                <div className="member_inf">
                  <h5>Nghia Nguyen</h5>
                  <p>Member</p>
                </div>
              </div>

              <div className="team_card">
                <div className="member_image">
                  <img width="100%" src={avtHoaiY}></img>
                </div>
                <div className="member_inf">
                  <h5>Y Pham</h5>
                  <p>Member</p>
                </div>
              </div>

              <div className="team_card">
                <div className="member_image">
                  <img width="100%" src={avtMinh}></img>
                </div>
                <div className="member_inf">
                  <h5>Minh Vuong</h5>
                  <p>Member</p>
                </div>
              </div>

              <div className="team_card">
                <div className="member_image">
                  <img width="100%" src={avtNam}></img>
                </div>
                <div className="member_inf">
                  <h5>Nam Nguyen</h5>
                  <p>Member</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

export default About;
