import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import SignUp from "./components/pages/SignUp";
import SignIn from "./components/pages/SignIn";
import ControlledExpansionPanels from "./components/Expenses/ExpensePage";

function App() {
    return (
      <Router>
      <div>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/expense" component={ControlledExpansionPanels} />
      </div>
    </Router>
  );
}


export default App;
