import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <div className="cgk-contact" id="scroll-target-contact">
        <div className="container">
          <div className="row min-vh-100 justify-content-center align-items-center">
            <div className="col-md-6 mb-5 mb-md-0 p-4">
              <h4 className="font-weight-bold text-uppercase mb-4">
                Cogeek Development Team
              </h4>
              <p className="text-uppercase mb-1">
                <b>Address: </b>
              </p>
              <p>Mac Dinh Chi, An Binh, Bien Hoa, Dong Nai, Viet Nam.</p>
              <p className="text-uppercase mb-1">
                <b>Email: </b>
              </p>
              <p>
                cogeek.contact@gmail.com{"  "}
                <a
                  target="_blank"
                  rel="external nofollow noopener"
                  href="mailto:cogeek.contact@gmail.com"
                >
                  <i className="fal fa-paper-plane"></i>
                </a>
              </p>
              <p className="text-uppercase mb-1">
                <b>OFFICE HOURS: </b>
              </p>
              <p>9 AM – 7 PM Monday to Friday</p>
              <p className="text-uppercase mb-1">
                <b>Follow us: </b>
              </p>
              <div className="follow-cgk" style={{ fontSize: 30 }}>
                <a
                  href="https://www.facebook.com/cogeek.page/"
                  target="_blank"
                  rel="noreferrer"
                  className=""
                  style={{ marginRight: 10 }}
                >
                  <i className="fab fa-facebook facebook-color"></i>
                </a>
                <a
                  href="https://twitter.com/Cogeek_Team"
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
