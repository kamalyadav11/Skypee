import { combineReducers } from "redux";

import user from "./userReducer";
import typing from "./typingReducer";
import contacts from "./contactReducer";
import messages from "./messagesReducer";
import activeUserId from "./activeUserIdReducer";

export default combineReducers({
  user,
  typing,
  contacts,
  messages,
  activeUserId
});
