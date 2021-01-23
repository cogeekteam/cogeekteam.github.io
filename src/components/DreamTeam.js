import React from "react";
import avtNghia from "../assets/img/nghia-nguyen-huu.png";
import avtMinh from "../assets/img/minh-vuong.png";
import avtHoaiY from "../assets/img/hoai-y-pham.png";
import avtNam from "../assets/img/nam-hoang.png";
import arrowObj from "../assets/img/arrow-object.svg";

function DreamTeam(props) {
  return (
    <div className="container">
      <div className="row min-vh-100 justify-content-center align-items-center mb-3 mb-md-0">
        <div className="col-12">
          <div className="cgk-dream-team">
            <h1 className="text-center font-weight-light">Our Team</h1>
            <hr className="break-small"></hr>
            <div className="row justify-content-center mt-5">
              <div className="team_card">
                <div className="member_image">
                  <img width="100%" src={avtNghia}></img>
                </div>
                <div className="member_inf">
                  <h5>Nghia Nguyen</h5>
                  <p>Member</p>
                  <div className="mb-3 member_contact">
                    <a
                      className="m-2"
                      href="https://www.facebook.com/cogeek.page"
                      target="_blank"
                    >
                      <i className="fab fa-facebook facebook-color"></i>
                    </a>
                    <a className="m-2" href="#">
                      <i className="fas fa-globe"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="team_card">
                <div className="member_image">
                  <img width="100%" src={avtHoaiY}></img>
                </div>
                <div className="member_inf">
                  <h5>HY Pham</h5>
                  <p>Member</p>
                  <div className="mb-3 member_contact">
                    <a
                      className="m-2"
                      href="https://www.facebook.com/cogeek.page"
                      target="_blank"
                    >
                      <i className="fab fa-facebook facebook-color"></i>
                    </a>
                    <a className="m-2" href="#">
                      <i className="fas fa-globe"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* <div className="team_card">
                <div className="member_image">
                  <img width="100%" src={avtMinh}></img>
                </div>
                <div className="member_inf">
                  <h5>Minh Vuong</h5>
                  <p>Member</p>
                </div>
              </div> */}
              <div className="team_card">
                <div className="member_image">
                  <img width="100%" src={avtNam}></img>
                </div>
                <div className="member_inf">
                  <h5>Nam Nguyen</h5>
                  <p>Member</p>
                  <div className="mb-3 member_contact">
                    <a
                      className="m-2"
                      href="https://www.facebook.com/cogeek.page"
                      target="_blank"
                    >
                      <i className="fab fa-facebook facebook-color"></i>
                    </a>
                    <a className="m-2" href="#">
                      <i className="fas fa-globe"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-4">
              <a className="btn-member_seemore" href="#">
                See more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DreamTeam;
