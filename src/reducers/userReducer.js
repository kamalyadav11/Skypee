import { generateUser } from "../static-data";

export default (state = generateUser()) => {
  return state;
};
