import { VIDEOS_FETCHED } from "../types";

export default function(state = [], action = {}) {
  switch (action.type) {
    case VIDEOS_FETCHED:
      return action.videos;

    default:
      return state;
  }
}
