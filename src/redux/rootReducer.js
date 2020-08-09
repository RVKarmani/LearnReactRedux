import cakeReducer from "./cake/cakeReducer";
import iceReducer from "./icecream/iceReducer";
import userReducer from "./user/userReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceReducer,
  user: userReducer,
});

export default rootReducer;
