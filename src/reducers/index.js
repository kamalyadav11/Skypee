import { combineReducers } from "redux";
import ContactReducer from "./ContactReducer";
import user from "../container/User";

export default combineReducers({
  contacts: ContactReducer,
  user: user
});
