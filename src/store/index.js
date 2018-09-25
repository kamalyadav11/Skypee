import { createStore } from "redux";
import reducers from "../reducers/ContactReducer";

const store = createStore(reducers);

export default store;
