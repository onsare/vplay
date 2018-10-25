import api from "../../api";
import { VIDEOS_FETCHED } from "../types";

export const videosFetched = videos => ({
  type: VIDEOS_FETCHED,
  videos
});

export const fetchVideos = data => dispatch =>
  api.videos.fetchVideos(data).then(videos => {
    dispatch(videosFetched(videos));
  });
