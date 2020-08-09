import { BUY_ICE_CREAM } from "./iceTypes";

const initialState = {
  numOfIceCreams: 20,
};

//Defining reducer

const iceReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };

    default:
      return state;
  }
};

export default iceReducer;
