import React from "react";

import "./ChatHeader.css";

const ChatHeader = ({ user }) => {
  const { name, status } = user;
  return (
    <header className="headr__name">
      <h1 className="Header__name">{name}</h1>
      <p className="Header__status">{status}</p>
    </header>
  );
};

export default ChatHeader;
