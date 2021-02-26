import React from "react";
import avtNghia from "../assets/img/nghia-nguyen-huu.jpg";
// import avtMinh from "../assets/img/minh-vuong.png";
import avtHoaiY from "../assets/img/hoai-y-pham.jpg";
import avtNam from "../assets/img/nam-nguyen-huu.jpg";
let memberList = [
  {
    name: "Nghia Nguyen",
    avatar: avtNghia,
  },
  {
    name: "HY Pham",
    avatar: avtHoaiY,
  },
  {
    name: "Nam Nguyen",
    avatar: avtNam,
  },
];
function DreamTeam(props) {
  return (
    <div className="container">
      <div className="row min-vh-100 justify-content-center align-items-center mb-3 mb-md-0">
        <div className="col-12">
          <div className="cgk-dream-team">
            <h1 className="text-center font-weight-light">Our Team</h1>
            <hr className="break-small"></hr>
            <div className="row justify-content-center mt-5">
              {memberList.map((item, index) => (
                <TeamCard key={index} name={item.name} avatar={item.avatar} />
              ))}
            </div>
            {/* <div className="text-center mt-4">
              <a className="btn-member_seemore" href="#">
                See more
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
const TeamCard = ({ name, avatar, role, faceBook, linkedIn }) => {
  return (
    <div className="team_card">
      <div className="member_image">
        <img width="100%" src={avatar}></img>
      </div>
      <div className="member_inf">
        <p className="member_name">{name}</p>
        <p>{role ? role : "Member"}</p>
        <div className="mb-3 member_contact">
          <a
            className="m-2"
            href={faceBook ? faceBook : "https://www.facebook.com/cogeek.page"}
            target="_blank"
          >
            <i className="fab fa-facebook facebook-color"></i>
          </a>
          <a className="m-2" href={linkedIn ? linkedIn : "#"}>
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
export default DreamTeam;
