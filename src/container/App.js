import React, { Component } from "react";

import "./App.css";
import SideBar from "../components/SideBar";
import Main from "../components/Main";
import store from "../store";

const { user, activeUserId } = store.getState();

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar />
        <Main user={user} activeUserId={activeUserId} />
      </div>
    );
  }
}

export default App;
