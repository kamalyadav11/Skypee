import React, { Component } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import store from "./store";

const { contacts } = store.getState();

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar contacts={contacts} />
        <Main />
      </div>
    );
  }
}

export default App;
//TODO: Add git remote respository
