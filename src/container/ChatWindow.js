import React from "react";
import _ from "lodash";
import { connect } from "react-redux";

import ChatHeader from "../components/ChatHeader";
import MessageInput from "./MessageInput";
import Chats from "./Chats";
import "./ChatWindow.css";

const ChatWindow = props => {
  const activeUser = props.contacts[props.activeUserId];
  const activeMessages = props.messages[props.activeUserId];
  return (
    <div className="ChatWindow">
      <ChatHeader user={activeUser} />
      <Chats messages={_.values(activeMessages)} />
      <MessageInput />
    </div>
  );
};

const mapStateToProps = state => ({
  contacts: state.contacts,
  messages: state.messages
});

export default connect(mapStateToProps)(ChatWindow);
