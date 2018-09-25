import { SET_ACTIVE_USER_ID } from "../constants/action-types";

const activeUserID = (state = null, action) => {
  switch (action.type) {
    case SET_ACTIVE_USER_ID:
      return action.payload;
    default:
      return state;
  }
};

export default activeUserID;
