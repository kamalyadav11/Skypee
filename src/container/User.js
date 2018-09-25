import React from "react";

import store from "../store";
import "./User.css";
import { setActiveUserId } from "../actions";

/**
 *
 * whenever the user(you) clicks on any of the Users(in the SideBar) then id of user(in the sidebar) will be set equal to active user_id
 */
function handleUserClick({ user_id }) {
  store.dispatch(setActiveUserId(user_id));
  console.log(user_id);
}

const User = ({ user }) => {
  const { name, profile_pic, status } = user;
  return (
    <div className="User" onClick={handleUserClick.bind(null, user)}>
      <img src={profile_pic} alt={name} className="User__pic" />
      <div className="User__details">
        <p className="User__details-name">{name}</p>
        <p className="User__details-status">{status}</p>
      </div>
    </div>
  );
};

export default User;
