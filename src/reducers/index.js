import { combineReducers } from "redux";
import ContactReducer from "./ContactReducer";
import user from "./UserReducer";

export default combineReducers({
  contacts: ContactReducer,
  user: user
});
