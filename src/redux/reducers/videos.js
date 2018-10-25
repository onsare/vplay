import { VIDEOS_FETCHED, VIDEOS_FETCHED_BY_CATEGORY_ID } from "../types";

export default function(state = [], action = {}) {
  switch (action.type) {
    case VIDEOS_FETCHED:
      return action.videos;
    case VIDEOS_FETCHED_BY_CATEGORY_ID:
      return action.videos;
    default:
      return state;
  }
}
