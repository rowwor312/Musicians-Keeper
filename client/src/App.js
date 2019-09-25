import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Pinger from "./components/Pinger";
import ControlledExpansionPanels from "./components/Expenses/ExpensePage";
//import  from "./components/Expenses/ExpensePage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <Pinger></Pinger>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ControlledExpansionPanels/>
        
      </div>

    );
  }
}

export default App;
