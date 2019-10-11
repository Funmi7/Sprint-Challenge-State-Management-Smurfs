import * as types from './actionTypes';

const initialFetchState = [];

export function smurfsReducers(state = initialFetchState, action) {
    switch(action.type) {
        case types.FETCH_DATA: 
        return [...state, ...action.payload]

        default: 
            return state
    }
}

