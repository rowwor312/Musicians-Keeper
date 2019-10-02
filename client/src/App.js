import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Pinger from "./components/Pinger";
import "./App.css";
import SignUp from "./components/pages/SignUp";
import SignIn from "./components/pages/SignIn";

function App() {
    return (
      <Router>
      <div>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
      </div>
    </Router>
  );
}


export default App;
