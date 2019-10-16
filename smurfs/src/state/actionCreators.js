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

export const addSmurfAPI = (inData, smurf) => dispatch => {
    Axios.post(inData, smurf)
    .then(res => {
      const smurfs = [...res.data];
      dispatch(getSmurfsData(smurfs));
    })
    .catch(error => {
      console.log('Error:', error);
    });
  }
  

// export function postSmurfs(formValues) {
//     return {
//         type: types.POST_DATA,
//         payload: {
//             name: formValues.name,
//             age: formValues.age,
//             height: formValues.height
//         }
//     }
// }

// export const addSmurfData = (formValues) => dispatch => {
//     Axios.post(smurfsApi, {
//         name: formValues.name,
//         age: formValues.age,
//         height: formValues.height
//     })
//     .then(res => {
//         dispatch({
//             type: types.POST_DATA,
//             payload: res.data
//         })
//     })
//     .catch(error => {
//         console.log('Error:', error)
//     })
// }

