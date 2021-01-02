import React from "react";
import logo from "../logo.svg";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";

import CgkFooter from "./Shared/CgkFooter";
import Navbar from "./Shared/Navbar";
import Home from "./Home";
import Contact from "./Contact";
import Policy from "./Policy";

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/service">
              <Home />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/about-us">
              <Contact />
            </Route>
            <Route exact path="/privacy-policy">
              <Policy />
            </Route>
            <Route exact path="/term-condition">
              <Home />
            </Route>
          </Switch>
          <CgkFooter />
        </Router>
      </div>
    );
  }
}

export default Navigation;
