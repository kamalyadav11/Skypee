import React, { Component } from "react";

import "./App.css";
import SideBar from "../../container/SideBar/SideBar";
import Main from "../../container/MainScreen/Main";

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
