import React from "react";

const ChatWindow = ({ activeUserID }) => {
  return (
    <div className="ChatWindow">Converstaion for user id: {activeUserID}</div>
  );
};

export default ChatWindow;
