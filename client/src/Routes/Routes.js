import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import RegistrationPage from "../RegistrationPage/RegistrationPage";
import LoginPage from "../LoginPage/LoginPage";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage}></Route>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
           <AuthProvider> 
            <Route
              exact
              path="/Registration"
              component={RegistrationPage}
            ></Route>
            <Route exact path="/Login" component={LoginPage}></Route>
           </AuthProvider> 
        </div>
      </Container>
    </Switch>
  );
}

export default Routes;