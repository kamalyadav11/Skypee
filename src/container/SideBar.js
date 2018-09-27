import React from "react";
import _ from "lodash";
import { connect } from "react-redux";

import "./SideBar.css";
import User from "./User";

const SideBar = ({ contacts }) => {
  return (
    <aside className="Sidebar">
      {_.values(contacts).map(contact => (
        <User key={contact.user_id} user={contact} />
      ))}
    </aside>
  );
};

const mapStateToProps = state => ({
  contacts: state.contacts
});

export default connect(mapStateToProps)(SideBar);
