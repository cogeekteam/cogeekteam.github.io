import React from "react";

class Contact extends React.Component {
  iframe = () => {
    return {
      __html:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d641.2294237363797!2d106.84166949407341!3d10.906927010143189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174df6f66d3fa67%3A0xf9822525c1181b3!2sCogeek!5e0!3m2!1sen!2s!4v1609666100433!5m2!1sen!2s" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>',
    };
  };

  render() {
    return (
      <div className="cgk-contact" id="scroll-target-contact">
        <div className="container">
          <div className="row min-vh-100 justify-content-center align-items-center">
            <div className="col-md-6 mb-5 mb-md-0">
              <h4 className="font-weight-bold text-uppercase mb-4">
                Cogeek Development Team
              </h4>
              <p className="text-uppercase mb-1">
                <b>Address: </b>
              </p>
              <p>
                301 Cu Xa Duong, Quarter 10, Mac Dinh Chi Street, An Binh Ward,
                Bien Hoa City, Dong Nai Province, Viet Nam.
              </p>
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
                  <i className="fab fa-facebook"></i>
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
            <div className="col-md-6">
              <div dangerouslySetInnerHTML={this.iframe()} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
