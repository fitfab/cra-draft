import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'

import CMSReducer from './cms/reducer.js';


// create a store that has redux-thunk middleware enabled
const createStoreWidthMiddleware = applyMiddleware(
    thunk,
    createLogger()
)(createStore);

// Create store with the combinedReducer
const combinedReducers = combineReducers({
    CMSReducer
});

const configureStore = function() {
    const store = createStoreWidthMiddleware(combinedReducers);
    return store;
}

export default configureStore;
