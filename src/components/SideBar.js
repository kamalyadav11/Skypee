import React from "react";

import "./SideBar.css";
import User from "./User";

const SideBar = ({ contacts }) => {
  return (
    <aside className="Sidebar">
      {contacts.map(contact => (
        <User key={contact.user_id} user={contact} />
      ))}
    </aside>
  );
};

export default SideBar;
