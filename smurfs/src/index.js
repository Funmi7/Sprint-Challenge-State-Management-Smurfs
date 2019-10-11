import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import {combineReducers, createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
// import * as serviceWorker from './serviceWorker';
import * as reducers from './state/reducers';

const singleReducer = combineReducers({
    smurfs: reducers.smurfsReducers,
 });
 
 const store = createStore(
     singleReducer,
     {},
     compose(
         applyMiddleware(thunk),
         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
     ),  
 );

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById("root"));




