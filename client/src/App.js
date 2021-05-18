import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from "react-router-dom";

import Header from "./pages/Header";
import Landingpage from "./pages/Landingpage";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/"><Landingpage /></Route>
      <Route exact path="/login"><Login /></Route>
      <Route exact path="/registration"><Registration /></Route>
    </div>
  );
}

export default App;