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
import Condition from "./Condition";
import About from "./About";
import Service from "./Service";
import Section1 from "./sections/Section1";
import DreamTeam from "./DreamTeam";

class Navigation extends React.Component {
  render() {
    return (
      // <div>
      //   <Router>
      //     <Navbar />

      //     <Switch>
      //       <Route exact path="/">
      //         <Home />
      //       </Route>
      //       <Route path="/service">
      //         <Service />
      //       </Route>
      //       <Route path="/contact">
      //         <Contact />
      //       </Route>
      //       <Route path="/about-us">
      //         <About />
      //       </Route>
      //       <Route path="/privacy-policy">
      //         <Policy />
      //       </Route>
      //       <Route path="/term-condition">
      //         <Condition />
      //       </Route>
      //     </Switch>
      //     <CgkFooter />
      //   </Router>
      // </div>
      <div>
        <Navbar />
        <Home />
        <About />
        <DreamTeam />
        <Section1 />
        <Contact />
        <CgkFooter />
      </div>
    );
  }
}

export default Navigation;
