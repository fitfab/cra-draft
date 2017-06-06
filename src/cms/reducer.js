import {
    REQUEST_BEGIN,
    REQUEST_SUCCESS,
    REQUEST_FAILED
} from './actionTypes.js';

const initialState = {
    errors: [],
    isFetching: false,
    fetchComplete: false,
    list: [],
}

export default ( state=initialState, action ) => {
    let newState;
    switch(action.type) {

        case REQUEST_BEGIN:
            newState = { isFetching: true };
            state = Object.assign({}, state, newState)
            break;

        case REQUEST_SUCCESS:
            newState = {
                isFetching: false,
                list: action.payload.data
            };
            state = Object.assign({}, state, newState)
            break;

        case REQUEST_FAILED:
            newState = {
                isFetching: false,
                errors: action.payload.errors
            };
            state = Object.assign({}, state, newState)
            break;

        default:
            state = initialState;
            break;
    }

    return state;
}
