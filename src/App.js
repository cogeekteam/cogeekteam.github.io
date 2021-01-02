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

class App extends React.Component {
  render() {
    return <Navigation />;
  }
}

export default App;
