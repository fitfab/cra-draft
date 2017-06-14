import axios from 'axios';
import {
    REQUEST_BEGIN,
    REQUEST_SUCCESS,
    REQUEST_FAILED,
    endpoint
} from './actionTypes.js';


export const requestBegin = () =>  ({
    type: REQUEST_BEGIN
})

export const requestSuccess = (payload) => ({
    payload,
    type: REQUEST_SUCCESS
})

export const requestFailed = (payload) => ({
    payload,
    type: REQUEST_FAILED
})

export function getList() {

    // Thunk middleware knows how to handle functions.
    // It passes the dispatch method as an argument to the function,
    // thus making it able to dispatch actions itself.

    return (dispatch) => {
        // 1st dispatch: the app state is updated to inform
        // that the API call is starting.
        dispatch(requestBegin());

        //2nd Ajax: call to the api
        axios.get(endpoint, { timeout: 3000 })
        .then((json) => {
            // Notify that we have received the data
            dispatch(requestSuccess(json));

        }).catch((json) => {
            // Notify of any failure from the request
            dispatch(requestFailed(json));

        });

    };
}

export function handleSubmit(data) {
    console.log('handleSubmit', data)
}
