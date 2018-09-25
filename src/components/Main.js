import React from "react";

import EmptyMain from "./EmptyMain";
import ChatWindow from "./ChatWindow";
import "./Main.css";

const Main = ({ user, activeUserID }) => {
  const renderMainContent = () => {
    if (!activeUserID) {
      return <EmptyMain user={user} activeUserID={activeUserID} />;
    } else {
      return <ChatWindow activeUserID={activeUserID} />;
    }
  };
  return <main className="Main">{renderMainContent()}</main>;
};

export default Main;
