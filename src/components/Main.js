import React from "react";

import EmptyMain from "./EmptyMain";
import ChatWindow from "../container/ChatWindow";
import "./Main.css";

const Main = ({ user, activeUserId }) => {
  const renderMainContent = () => {
    if (!activeUserId) {
      return <EmptyMain user={user} activeUserId={activeUserId} />;
    } else {
      return <ChatWindow activeUserId={activeUserId} />;
    }
  };
  return <main className="Main">{renderMainContent()}</main>;
};

export default Main;
