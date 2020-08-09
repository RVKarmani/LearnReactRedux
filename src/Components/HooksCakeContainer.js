import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

function HooksCakeContainer() {
  //This hook accepts function as parameter
  //State as argument
  //Access number of  cakes in redux state and assign to variable
  // const numOfCakes = useSelector((state) => state.numOfCakes);

  const numOfCakes = useSelector((state) => state.cake.numOfCakes); // //As state split - rootReducer

  //Dispatch
  const dispatch = useDispatch();
  return (
    <div>
      <h1> Number of cakes - {numOfCakes} </h1>
      <button className="button-red" onClick={() => dispatch(buyCake())}>
        Buy Cake
      </button>
    </div>
  );
}

export default HooksCakeContainer;
