import React from "react";
import "./css/skeleton.css";
import "./css/normalize.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./Components/CakeContainer";
import HooksCakeContainer from "./Components/HooksCakeContainer";
import IceCreamContainer from "./Components/IceCreamContainer";
import NewCakeContainer from "./Components/NewCakeContainer";
import ItemContainer from "./Components/ItemContainer";
import UserContainer from "./Components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <h3 style={{ textAlign: "center" }}>REACT REDUX APPLICATION</h3>
      <div className="row">
        <div className="one-third column">
          <h2>Cake Container</h2>
          <CakeContainer />
        </div>
        <div className="one-third column">
          <h2>Hooks Cake Container</h2>
          <HooksCakeContainer />
        </div>
        <div className="one-third column">
          <h2>IceCream Container</h2>
          <IceCreamContainer />
        </div>
      </div>
      <br />
      <br />
      <div className="row">
        <div className="one-third column">
          <h2>New Cake Container</h2>
          <NewCakeContainer />
        </div>
        <div className="one-third column">
          <h2>Cake Prop passed: </h2>
          <ItemContainer cake />
        </div>

        <div className="one-third column">
          <h2>No Prop passed: </h2>
          <ItemContainer />
        </div>
      </div>
      <div className="row">
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
