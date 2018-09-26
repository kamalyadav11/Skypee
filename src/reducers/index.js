import { combineReducers } from "redux";

import user from "./UserReducer";
import contacts from "./ContactReducer";
import activeUserId from "./ActiveUserID";
import messages from "./messages";
import typing from "./TypingReducer";

export default combineReducers({
  user,
  typing,
  contacts,
  messages,
  activeUserId
});
