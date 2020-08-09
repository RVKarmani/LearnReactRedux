import { createStore, applyMiddleware } from "redux";
// import cakeReducer from "./cake/cakeReducer";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// import * as from "../redux/cake/cakeActions";
//Creating store
// const store = createStore(cakeReducer);

// const store = createStore(
//   cakeReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ &&
//     window.__REDUX_DEVTOOLS_EXTENSION__({
//       // actionCreators,
//       // serialize: true,
//       trace: true,
//     })
// );

//Replacing with root reducer

const store = createStore(
  rootReducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ &&
  //   window.__REDUX_DEVTOOLS_EXTENSION__({
  //     // actionCreators,
  //     // serialize: true,
  //     trace: true,
  //   }),
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;

//Provide redux store to REACT application - here react-redux comes
