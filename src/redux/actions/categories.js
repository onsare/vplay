import api from "../../api";
import { CATEGORIES_FETCHED } from "../types";

export const categoriesFetched = categories => ({
  type: CATEGORIES_FETCHED,
  categories
});

export const fetchCategories = data => dispatch =>
  api.videos.fetchCategories(data).then(categories => {
    dispatch(categoriesFetched(categories));
  });
