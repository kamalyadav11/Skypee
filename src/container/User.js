import React from "react";
import { connect } from "react-redux";

import "./User.css";
import { setActiveUserId } from "../actions";
import { bindActionCreators } from "redux";

class User extends React.Component {
  handleUserClick = () => {
    // store.dispatch(setActiveUserId(user_id));
    this.props.setActiveUserId(this.props.user.user_id);
  };
  render() {
    const { name, profile_pic, status } = this.props.user;
    return (
      <div className="User" onClick={this.handleUserClick}>
        <img src={profile_pic} alt={name} className="User__pic" />
        <div className="User__details">
          <p className="User__details-name">{name}</p>
          <p className="User__details-status">{status}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  activeUserId: state.activeUserId
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setActiveUserId }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
