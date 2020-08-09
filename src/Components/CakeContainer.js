import React from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";

function CakeContainer(props) {
  return (
    <div>
      <h1>Number of cakes - {props.numOfCakes} </h1>
      <button className="button-red" onClick={props.buyCake}>
        Buy Cake
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
    buyCake: () => dispatch(buyCake()), // Dispatches action creator from redux
  };
};
// export default CakeContainer;
//connecting functions
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
