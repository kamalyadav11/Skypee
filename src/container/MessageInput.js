import React from "react";
import { connect } from "react-redux";

import { setTypingValue, sendMessage } from "../actions";
import "./MessageInput.css";
import { bindActionCreators } from "redux";

const MessageInput = props => {
  const handleChange = e => {
    props.setTypingValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.sendMessage(props.typing, props.activeUserId);
  };

  return (
    <form className="Message" onSubmit={handleSubmit}>
      <input
        className="Message__input"
        onChange={handleChange}
        value={props.typing}
        placeholder="Type a message"
      />
    </form>
  );
};

const mapStateToProps = state => ({
  typing: state.typing,
  activeUserId: state.activeUserId
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setTypingValue, sendMessage }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageInput);
