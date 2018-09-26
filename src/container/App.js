import React, { Component } from "react";

import "./App.css";
import SideBar from "../components/SideBar";
import Main from "../components/Main";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar />
        <Main />
      </div>
    );
  }
}

export default App;
