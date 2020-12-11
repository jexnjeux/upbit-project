import React, { useState, useEffect, Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "../src/Components/Nav/Nav";
import Footer from "../src/Components/Footer/Footer";
import Exchange from "./Pages/Exchange/Exchange";
import SignUp from "./Pages/SignUp/SignUp";
import SingIn from "./Pages/SignIn/SignIn";

function Routes() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log(localStorage.Authorization);
  const accessToken = localStorage.getItem("Authorization");

  useEffect(() => {
    if (localStorage.Authorization) {
      console.log("있음");
      setIsLoggedIn(true);
    } else {
      console.log("없음");
      setIsLoggedIn(false);
    }
  }, []);

  console.log("isLoggedIn!!", isLoggedIn);

  return (
    <>
      <Router>
        <Nav
          accessToken={accessToken}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
        <Switch>
          <Route exact path="/" component={Exchange} />
          <Route exact path="/signup" component={SignUp} />
          <Route
            exact
            path="/signin"
            component={SingIn}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default Routes;
