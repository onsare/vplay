import api from "../../api";
import { VIDEOS_FETCHED, VIDEOS_FETCHED_BY_CATEGORY_ID } from "../types";

export const videosFetched = videos => ({
  type: VIDEOS_FETCHED,
  videos
});

export const videosFetchedById = videos => ({
  type: VIDEOS_FETCHED_BY_CATEGORY_ID,
  videos
});

export const fetchVideos = data => dispatch =>
  api.videos.fetchVideos(data).then(videos => {
    dispatch(videosFetched(videos));
  });

export const fetchVideosByCategoryId = id => dispatch =>
  api.videos.fetchVideosByCategoryId(id).then(videos => {
    dispatch(videosFetchedById(videos));
  });
