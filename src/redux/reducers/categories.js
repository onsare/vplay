import { CATEGORIES_FETCHED } from "../types";

export default function(state = [], action = {}) {
  switch (action.type) {
    case CATEGORIES_FETCHED:
      return action.categories;

    default:
      return state;
  }
}
