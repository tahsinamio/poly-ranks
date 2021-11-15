import { FETCH_CLASS } from "../actions/types";

export default function (state = '', action) {
  console.log(action);
  switch (action.type) {
    case FETCH_CLASS:
      return action.payload;
    default:
      return state;
  }
}
