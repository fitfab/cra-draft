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
            newState = { isFetching: true, fetchComplete: false, };
            state = Object.assign({}, state, newState)
            break;

        case REQUEST_SUCCESS:
            //console.log('REQUEST_SUCCESS',action.payload.data)
            newState = {
                fetchComplete: true,
                isFetching: false,
                list: action.payload.data
            };
            console.log('REQUEST_SUCCESS', newState)
            state = Object.assign({}, state, newState)
            break;

        case REQUEST_FAILED:
            newState = {
                isFetching: false,
                fetchComplete: false,
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
