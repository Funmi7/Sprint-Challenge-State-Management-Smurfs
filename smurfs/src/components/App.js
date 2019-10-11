import React, { Component, useEffect } from "react";
import "./App.css";
import SmurfsList from "./SmurfsList";
import SmurfForm from './AddSmurf'
import {connect} from 'react-redux';
import * as actionCreators from '../state/actionCreators';

export function App (props) {
  const {getSmurfsData, smurfs} = props;
  useEffect(() => {
    getSmurfsData();
  }, [])
  
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfsList smurfs={smurfs}/>
        <SmurfForm />
      </div>
    );
  }

export default connect(
  state => state,
  actionCreators,
)(App)
