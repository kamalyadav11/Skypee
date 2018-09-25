import { getMessages } from "../static-data";

const messages = (state = getMessages(10), action) => state;

export default messages;
