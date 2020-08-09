import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux";
function ItemContainer(props) {
  return (
    <div>
      {/* Display either number of cakes or number of iceCreams */}
      <h2>Item - {props.item}</h2>
      <button onClick={props.buyItem}>Buy Items </button>
    </div>
  );
}

//ownProps - props of the component itself
const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams;
  return { item: itemState };
};

//Similar to mapStateToProps
const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());
  return {
    buyItem: dispatchFunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
