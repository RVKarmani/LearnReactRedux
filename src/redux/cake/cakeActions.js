import { BUY_CAKE } from "./cakeTypes";

//Contains action creators
// export const buyCake = () => {
//Ensuring it dosen't break for CakeContainer and HooksCakeContainer
export const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    info: "Buying cake",
    payload: number,
  };
};
