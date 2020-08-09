import { BUY_ICE_CREAM } from "./iceTypes";

//Contains action creators
export const buyIceCream = () => {
  return {
    type: BUY_ICE_CREAM,
    info: "Buying ice Cream",
  };
};
