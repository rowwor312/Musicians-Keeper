import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Pinger from "./components/Pinger";
import ControlledExpansionPanels from "./components/Expenses/ExpensePage";
import Navbar from './components/Navbar';
import ReactDOM from 'react-dom';

ReactDOM.render(<Navbar />, document.querySelector('#root'));

class App extends Component {
  render() {
    return (

      <div className="App">
        <div className="App-header">
         <Navbar/>
          {/* <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <Pinger></Pinger> */}
        </div>
        
        <ControlledExpansionPanels />

      </div>

    );
  }
}

export default App;
