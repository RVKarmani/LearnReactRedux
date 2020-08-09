import React from "react";
import { buyIceCream } from "../redux";
import { connect } from "react-redux";

function IceCreamContainer(props) {
  return (
    <div>
      <h1>Number of Ice Creams - {props.numOfIceCreams} </h1>
      <button className="button-blue" onClick={props.buyIceCream}>
        Buy Ice Cream
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    // numOfCakes: state.numOfCakes,
    numOfIceCreams: state.iceCream.numOfIceCreams, //As state split - rootReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()), // Dispatches action creator from redux
  };
};
// export default CakeContainer;
//connecting functions
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
