import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import $ from "jquery";

class App extends React.Component {
  componentDidMount() {
    $("a").on("click", function (event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        // $("html, body").animate(
        //   {
        //     scrollTop: $(hash).offset().top,
        //   },
        //   1,
        //   function () {
        //     $("html, body").clearQueue();
        //   }
        // );
        $(document).scrollTop($(hash).offset().top);
        window.location.href.substr(0, window.location.href.indexOf("#"));
      } // End if
    });
    var hAbout = $("#scroll-target-about").offset().top,
      hContact = $("#scroll-target-contact").offset().top;

    var prevScrollpos = window.pageYOffset;
    if ($(window).scrollTop() != 0) {
      $("#navi-top").css("background-color", "rgba(32, 35, 42, 1)");
      $("#navi-top .navbar-brand img").css("height", "25px");
      $("#navi-top .navbar-brand ").css("padding-top", "0.8rem");
      $("#navi-top .navbar-brand ").css("padding-bottom", "0.8rem");
    }
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > hContact - 50) {
        $(".nav-link").removeClass("active");
        $(".nav-contact").addClass("active");
      } else if (prevScrollpos > hAbout - 50) {
        $(".nav-link").removeClass("active");
        $(".nav-about").addClass("active");
      } else {
        $(".nav-link").removeClass("active");
        $(".nav-home").addClass("active");
      }
      if (prevScrollpos > currentScrollPos) {
        if (prevScrollpos <= 100) {
          $("#navi-top").css("background-color", "rgba(32, 35, 42, 0)");
          $("#navi-top .navbar-brand img").css("height", "40px");
          $("#navi-top .navbar-brand ").css("padding-top", "1.2rem");
          $("#navi-top .navbar-brand ").css("padding-bottom", "1.2rem");
        }
      } else {
        // scroll down
        if (prevScrollpos > 70) {
          $("#navi-top").css("background-color", "rgba(32, 35, 42, 1)");
          $("#navi-top .navbar-brand img").css("height", "25px");
          $("#navi-top .navbar-brand ").css("padding-top", "0.8rem");
          $("#navi-top .navbar-brand ").css("padding-bottom", "0.8rem");
        }
      }
      prevScrollpos = currentScrollPos;
    };
  }
  render() {
    return <Navigation />;
  }
}

export default App;
