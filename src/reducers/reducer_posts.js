import  { FETCH_POSTS } from '../actions/index';

const INITIAL_STATE = {
    all: [],
    post : null
};
//1. Data we care about lives @ action.payload.data
//2. Reducer need to return a *NEW* object
export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_POSTS:
            return { ...state,  all: action.payload.data };
        default:
            return state;
    }
}