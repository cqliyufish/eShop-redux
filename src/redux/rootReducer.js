import { combineReducers } from "redux";
import { userReducer } from "./user/userReducer";
import { CategoryReducer } from "./category/categoryReducer";
import { cartReducer } from "./cart/cartReducer";
export const rootReducer = combineReducers({
  user: userReducer,
  categories: CategoryReducer,
  cart: cartReducer,
});
