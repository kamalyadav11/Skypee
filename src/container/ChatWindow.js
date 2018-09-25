import React from "react";

import store from "../store";
import Header from "../components/Header";

const ChatWindow = ({ activeUserID }) => {
  const activeUser = store.getState().contacts[activeUserID];
  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
    </div>
  );
};

export default ChatWindow;
