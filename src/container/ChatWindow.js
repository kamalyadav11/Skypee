import React from "react";
import _ from "lodash";

import store from "../store";
import ChatHeader from "../components/ChatHeader";
import MessageInput from "./MessageInput";
import Chats from "./Chats";
import "./ChatWindow.css";

const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  const activeUser = state.contacts[activeUserId];
  const activeMessages = state.messages[activeUserId];
  return (
    <div className="ChatWindow">
      <ChatHeader user={activeUser} />
      <Chats messages={_.values(activeMessages)} />
      <MessageInput />
    </div>
  );
};

export default ChatWindow;
