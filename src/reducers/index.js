import { combineReducers } from "redux";

import user from "./UserReducer";
import contacts from "./ContactReducer";
import activeUserID from "./ActiveUserID";
import messages from "./messages";

export default combineReducers({
  user,
  contacts,
  messages,
  activeUserID
});
