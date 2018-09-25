import { combineReducers } from "redux";
import user from "./UserReducer";
import contacts from "./ContactReducer";

export default combineReducers({
  user,
  contacts
});
