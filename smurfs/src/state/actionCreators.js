import * as types from './actionTypes';
import Axios from 'axios';

const smurfsApi = 'http://localhost:3333/smurfs';

export function fetchSmurfsData(smurfs) {
    return {
        type: types.FETCH_DATA,
        payload: smurfs
    }
}

export const getSmurfsData = () => dispatch => {
    Axios.get(smurfsApi)
    .then(response => {
        const smurfs = response.data;
        dispatch(fetchSmurfsData(smurfs))
    })
    .catch(error => {
        console.log('Error:', error)
    })
}

