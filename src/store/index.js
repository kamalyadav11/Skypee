import { createStore } from "redux";
import reducers from "../reducers";
import { contacts } from "../static-data";

const store = createStore(reducers, { contacts });

export default store;
