import CATEGORY_ACTION_TYPES from "./categoryTypes";
import { createAction } from "redux/reducer.util";

export const setCategories = (categoriesArray) =>
  createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES, categoriesArray);
