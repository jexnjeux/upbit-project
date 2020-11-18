import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "../src/Components/Nav/Nav";
import Footer from "../src/Components/Footer/Footer";
import Exchange from "./Pages/Exchange/Exchange";
import SignUp from "./Pages/SignUp/SignUp";
import Login from "./Pages/Login/Login";

export default class Routes extends Component {
  render() {
    return (
      <>
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Exchange} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}
