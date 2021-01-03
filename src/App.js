import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import $ from "jquery";

class App extends React.Component {
  componentDidMount() {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        if (prevScrollpos <= 100) {
          $("#navi-top .navbar-brand img").css("height", "40px");
          $("#navi-top .navbar-brand ").css("padding-top", "1.2rem");
          $("#navi-top .navbar-brand ").css("padding-bottom", "1.2rem");
        }
      } else {
        // scroll down
        if (prevScrollpos > 70) {
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
