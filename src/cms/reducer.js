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
            //console.log('REQUEST_SUCCESS',action.payload.data)
            newState = {
                isFetching: false,
                list: action.payload.data
            };
            state = Object.assign({}, state, newState)
            break;

        case REQUEST_FAILED:
            console.log('Miguel REQUEST_FAILED',action.payload)
            newState = {
                isFetching: false,
                errors: action.payload
            };
            state = Object.assign({}, state, newState)
            break;

        default:
            state = initialState;
            break;
    }

    return state;
}
