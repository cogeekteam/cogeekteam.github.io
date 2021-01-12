import React from "react";
import logo from "../../logo.svg";
import $ from "jquery";
class Navbar extends React.Component {
  componentDidMount() {
    $("a").on("click", function (event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $("html, body").animate({ scrollTop: $(hash).offset().top });
        window.location.href.substr(0, window.location.href.indexOf("#"));
      } // End if
    });
    window.addEventListener("scroll", this.scrollOnNav, false);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollOnNav, false);
  }

  prevScrollpos = 0;
  scrollOnNav = () => {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos >= $("#scroll-target-contact").offset().top - 100) {
      $(".nav-link").removeClass("active");
      $(".nav-contact").addClass("active");
    } else if (
      currentScrollPos >=
      $("#scroll-target-about").offset().top - 100
    ) {
      $(".nav-link").removeClass("active");
      $(".nav-about").addClass("active");
    } else {
      $(".nav-link").removeClass("active");
      $(".nav-home").addClass("active");
    }
    if (this.prevScrollpos > currentScrollPos) {
      if (this.prevScrollpos <= 100) {
        $("#navi-top").css("background-color", "rgba(32, 35, 42, 0.9)");
        $("#navi-top .navbar-brand img").css("height", "40px");
        $("#navi-top .navbar-brand ").css("padding-top", "1.2rem");
        $("#navi-top .navbar-brand ").css("padding-bottom", "1.2rem");
      }
    } else {
      // scroll down
      if (this.prevScrollpos > 70) {
        $("#navi-top").css("background-color", "rgba(32, 35, 42, 1)");
        $("#navi-top .navbar-brand img").css("height", "25px");
        $("#navi-top .navbar-brand ").css("padding-top", "0.8rem");
        $("#navi-top .navbar-brand ").css("padding-bottom", "0.8rem");
      }
    }
    this.prevScrollpos = currentScrollPos;
  };
  render() {
    return (
      <nav
        className="navbar fixed-top navbar-expand-md topbar navbar-dark p-0"
        id="navi-top"
      >
        <div className="container">
          <button
            className="navbar-toggler m-2"
            type="button"
            data-toggle="collapse"
            data-target="#menu-top"
            aria-controls="menu-top"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="/">
            <img src={logo} height="40px" alt="" />
          </a>
          <div className="collapse navbar-collapse" id="menu-top">
            <div className="col-md-12">
              <ul className="navbar-nav justify-content-end text-uppercase">
                <li className="nav-item ml-3 mr-3">
                  <a className="nav-link nav-home" href="#scroll-target-home">
                    Home
                  </a>
                </li>
                {/* <li className="nav-item ml-3 mr-3">
                  <a
   
                    className="nav-link nav-intro"
                    href="/service"
                  >
                    Service
                  </a>
                </li> */}
                <li className="nav-item ml-3 mr-3">
                  <a href="#scroll-target-about" className="nav-link nav-about">
                    About us
                  </a>
                </li>
                <li className="nav-item ml-3 mr-3">
                  <a
                    className="nav-link nav-contact"
                    href="#scroll-target-contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
