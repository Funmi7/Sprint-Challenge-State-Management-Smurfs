import * as types from './actionTypes';

const initialFetchState = [];

export function smurfsReducers(state = initialFetchState, action) {
    switch(action.type) {
        case types.FETCH_DATA: 
            return [...state, ...action.payload];

        // case types.POST_DATA:
        //     return [...state.smurfs, ...action.payload]

        default: 
            return state;
    }
}

// const initialPostState = {
//     name: '',
//     age: '',
//     height: ''
// }

// export function postReducers(state = initialPostState, action){
//     switch(action.type) {
//         case types.POST_DATA:
//             return {
//                 ...state, ...action.payload
//             }
//         default:
//             return state;
//     }
// }