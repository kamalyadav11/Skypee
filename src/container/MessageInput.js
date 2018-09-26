import React from "react";
import { connect } from "react-redux";

import { setTypingValue } from "../actions";
import "./MessageInput.css";
import { bindActionCreators } from "redux";

const MessageInput = props => {
  const handleChange = e => {
    e.preventDefault();
    props.setTypingValue(e.target.value);
  };

  return (
    <form className="Message">
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
  typing: state.typing
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setTypingValue }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageInput);
