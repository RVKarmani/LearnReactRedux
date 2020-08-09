//For action payload scenario
import React from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";

import { useState } from "react";

function NewCakeContainer(props) {
  //InitialValue  is one
  const [number, setNumber] = useState(1);

  return (
    <div>
      <h1>Number of cakes - {props.numOfCakes} </h1>
      <input
        type="text"
        value={number}
        onChange={(event) => setNumber(event.target.value)}
      ></input>
      {/* <button className="button-red" onClick={props.buyCake}> */}
      <button className="button-red" onClick={() => props.buyCake(number)}>
        Buy {number} cakes
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    // numOfCakes: state.numOfCakes,
    numOfCakes: state.cake.numOfCakes, //As state split - rootReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // buyCake: () => dispatch(buyCake()), // Dispatches action creator from redux
    buyCake: (number) => dispatch(buyCake(number)),
  };
};
// export default CakeContainer;
//connecting functions
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
