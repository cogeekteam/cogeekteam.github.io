import React from "react";
import CgkFooter from "./Shared/CgkFooter";
import Navbar from "./Shared/Navbar";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Section1 from "./sections/Section1";
import DreamTeam from "./DreamTeam";
import ButtonScrollTop from "./Shared/ButtonScrollTop";
import Projects from "./Projects";

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
        <Projects />
        <DreamTeam />
        <Section1 />
        <Contact />
        <CgkFooter />
        <ButtonScrollTop />
      </div>
    );
  }
}

export default Navigation;
