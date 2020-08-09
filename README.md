1. REACT REDUX
==========
- [1. REACT REDUX](#1-react-redux)
- [2. Initialization](#2-initialization)
  - [2.1. Checklist](#21-checklist)
- [3. Adding Actions](#3-adding-actions)
- [4. Adding Reducer](#4-adding-reducer)
- [5. Creating store](#5-creating-store)
- [6. Dispatching action, subscribing to store](#6-dispatching-action-subscribing-to-store)
- [7. React Redux + Hooks](#7-react-redux--hooks)
  - [7.1. Scenario - use Hooks instead of connect()](#71-scenario---use-hooks-instead-of-connect)
- [8. Extending to IceCream](#8-extending-to-icecream)
- [9. Adding Middleware and other tools](#9-adding-middleware-and-other-tools)
  - [9.1. Logging](#91-logging)
  - [9.2. Redux Devtools](#92-redux-devtools)
- [10. Adding payload to action creator](#10-adding-payload-to-action-creator)
  - [10.1. Scenario: Adding input element to specify number of cakes -clicking on button will decrement that by the input](#101-scenario-adding-input-element-to-specify-number-of-cakes--clicking-on-button-will-decrement-that-by-the-input)
- [11. mapStateToProps Function](#11-mapstatetoprops-function)
  - [11.1. Scenario: There is another parameter to this function - props that have already been passed to the component](#111-scenario-there-is-another-parameter-to-this-function---props-that-have-already-been-passed-to-the-component)
- [12. mapDispatchToProps Function](#12-mapdispatchtoprops-function)
  - [12.1. Scenario: There is another parameter to this function - props that have already been passed to the component](#121-scenario-there-is-another-parameter-to-this-function---props-that-have-already-been-passed-to-the-component)
- [13. Async Actions](#13-async-actions)
  - [13.1. Scenario: Actions - Synchronous - change  immediate, Asynchronous actions - wait for task to complete before dispatching action - typical use case: API call](#131-scenario-actions---synchronous---change-immediate-asynchronous-actions---wait-for-task-to-complete-before-dispatching-action---typical-use-case-api-call)
  - [13.2. State](#132-state)
  - [13.3. Actions](#133-actions)
  - [13.4. Reducers](#134-reducers)

# 2. Initialization
1. CRA - `npx create-react-app react-redux-tutorial`
2. Create folder - Components within src
3. Install react-redux `npm install react-redux`
4. Create file CakeContainer.js within Components, create functional component using **rfce** shortcut

## 2.1. Checklist
- [x] React App
- [ ] Action
- [ ] Reducer
- [ ] Redux Store
- [ ] Dispatching action(dispatch), getting redux state in component(subscribe)

React Redux Pattern
Action creators, reducers, provide store amd connect the components to the store
Components can access state, dispatch actions

# 3. Adding Actions
1. Create folder redux inside src inside which cakes folder is created
2. cakeActions.js inside this folder - contains action creators
3. cakeTypes.js - exporting cake type which is used by the action creator

```
import { BUY_CAKE } from "./cakeTypes";

//Contains action creators
const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: "Buying cake",
  };
};

```

- [x] React App
- [x] Action
- [ ] Reducer
- [ ] Redux Store
- [ ] Dispatching action(dispatch), getting redux state in component(subscribe)


# 4. Adding Reducer
1. cakeReducer.js - contains reducer
```
const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};
```
- [x] React App
- [x] Action
- [x] Reducer
- [ ] Redux Store
- [ ] Dispatching action(dispatch), getting redux state in component(subscribe)

# 5. Creating store
1. store.js inside redux folder
2. createStore method from redux  - ES6 syntax = `import {createStore} from 'redux'`
3. From here react-redux comes into play - provide redux store to REACT
4. Importing Provider component from react-redux in App.js - parent component so that store is available to all - `import {Provider} from 'react-redux'`
5. Wrap entire return in **Provider** component
6. How does Provider component know about redux store ? - import store from './redux/store', pass this as props to **Provider**

- [x] React App
- [x] Action
- [x] Reducer
- [x] Redux Store
- [ ] Dispatching action(dispatch), getting redux state in component(subscribe)

# 6. Dispatching action, subscribing to store
1. CakeContainer.js - display number Of Cakes
2. Defining new function **mapStateToProps** - gets redux state as parameter, returns object
```
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};
```
3. **Selectors** - separate file like actions, reducers - it returns state information from redux store - *look into this*
4. Defining new function **mapDispatchToProps** - gets dispatch as parameter, returns object
```
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake), // Dispatches action creator from redux
  };
};
```
Import buyCake action creator - creating `index.js` inside redux folder
```import { buyCake } from "../redux";```
Connect above functions with **React Component** - using **connect** from react-redux

- [x] React App
- [x] Action
- [x] Reducer
- [x] Redux Store
- [x] Dispatching action(dispatch), getting redux state in component(subscribe)

# 7. React Redux + Hooks
## 7.1. Scenario - use Hooks instead of connect()
React Hooks - Give function components ability to use local component states, execute side effects etc.

React Redux v7.1 - Hooks have been added
Subscribe to store and dispatch actions without **connect()**

1. File - HooksCakeContainer.js
2. **useSelector** - Hook react-redux provides - acts as close equivalent to mapStateToProps function
```
const numOfCakes = useSelector((state) => state.numOfCakes);
```
3. **useDispatch** - Hook react-redux - dispatch actions
```
//Dispatch
  const dispatch = useDispatch();
  <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
```

# 8. Extending to IceCream

iceCreamTypes.js
iceCreamActions.js
iceCreamReducer.js

Creating rootReducer to combine iceCreamReducer and cakeReducer

# 9. Adding Middleware and other tools
## 9.1. Logging
1. Installing package - `npm install redux-logger`
2. Import it in store.js `import logger from 'redux-logger`
3. applyMiddleware function from 'redux'
4. applyMiddleWare(logger) passed as parameter to createStore function

## 9.2. Redux Devtools 
1. Adding extension to browser
2. Adding package to redux application - 
```
Use redux-devtools-extension package from npm

npm install --save redux-devtools-extension
and to use like so:

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(...middleware),
  // other store enhancers if any
));
```

# 10. Adding payload to action creator
## 10.1. Scenario: Adding input element to specify number of cakes -clicking on button will decrement that by the input

**Step 1:** File: NewCakeContainer.js
Need state variable so importing {useState} from react
1. Defining state for holding number entered
2. input tag to enter number and set state using event.target.value
3. Changing onClick buyCake function to accept number parameter
4. Modify `mapDispatchToProps` to dispatch buyCake action  with number parameter

**Step 2:** File: CakeActions.js - Updating action creator
1.  Update buyCake function creator in the file - add number parameter
2.  Add payload property to the action 
3.  Now we are passing additional information to the reducer - now to use  it
   
File: cakeReducer.js 
Change calculation to numOfCakes - action.payload

# 11. mapStateToProps Function
```
const mapStateToProps = (state) => {
  return {
    // numOfCakes: state.numOfCakes,
    numOfCakes: state.cake.numOfCakes, //As state split - rootReducer
  };
};

```

## 11.1. Scenario: There is another parameter to this function - props that have already been passed to the component

File: ItemContainer.js
Display either number of cakes or number of ice creams
```
const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams;
  return { item: itemState };
};
```
<ItemContainer cake /> - Cake prop is  passed so it displays cake number
<ItemContainer />else it displays ice cream number

# 12. mapDispatchToProps Function

## 12.1. Scenario: There is another parameter to this function - props that have already been passed to the component

How to define mapDispatchToProps without mapStateToProps ? 
In connect - (null, mapDispatchToProps)(Component)

# 13. Async Actions
## 13.1. Scenario: Actions - Synchronous - change  immediate, Asynchronous actions - wait for task to complete before dispatching action - typical use case: API call

To accomplish: Fetch user list from API endpoint, stores it in redux store, renders it in browser

## 13.2. State
state = {
  loading: true,
  data: [],
  error: ''
}

## 13.3. Actions
1. FETCH_USERS_REQUEST: Fetch list of users
2. FETCH_USERS_SUCCESS: Data fetched successfully
3. FETCH_USERS_FAILURE: Error fetching data

## 13.4. Reducers

case FETCH_USERS_REQUEST:
  loading: true
case FETCH_USERS_SUCCESS:
  loading: false,
  users: data from API
case FETCH_USERS_FAILURE:
  loading: false
  error: Error message

File: UserContainer.js - Render list  of users
Folder: user - userTypes, userActions, userReducer

packages - axios - for fetching data from endpoint
redux-thunk - for allowing us  to define asynchronous action creators in our application
```
export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchUsersFailure(errorMessage));
      });
  };
};
```