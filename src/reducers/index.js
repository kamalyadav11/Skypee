import { combineReducers } from "redux";
import user from "./UserReducer";
import contacts from "./ContactReducer";
import activeUserID from "./ActiveUserID";

export default combineReducers({
  user,
  contacts,
  activeUserID
});
