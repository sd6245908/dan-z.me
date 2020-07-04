import "./main.scss";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./home";
import Portfolio from "./portfolio";
import Offer from "./offer";
import CV from "./cv";
import Contact from "./contact";

const Main = () => {
  return (
    <div className="main">
      <div className="main-inner">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/offer">
              <Offer />
            </Route>
            <Route path="/cv">
              <CV />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default Main;
