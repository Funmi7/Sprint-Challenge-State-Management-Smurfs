import React, {useEffect} from 'react';
import SmurfsCard from './SmurfsCard';
import * as actionCreators from '../state/actionCreators';
import {connect} from 'react-redux';

export const SmurfsList = props => {
    const {smurfs} = props;

    return (
        smurfs.map(smurf => {
            return (
                <SmurfsCard
                key={smurf.id}
                name={smurf.name}
                age={smurf.age}
                height={smurf.height} />
            )
           
        })
    )
}

export default connect(
    state => state,
    actionCreators,
  )(SmurfsList)