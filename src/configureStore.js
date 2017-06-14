import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
// (1) import redux-form reducer
import { reducer as reduxFormReducer } from 'redux-form';

import CMSReducer from './cms/reducer';
import ReduxFormReducer from './cms-redux-form/reducer';


// create a store that has redux-thunk middleware enabled
const createStoreWidthMiddleware = applyMiddleware(
    thunk,
    createLogger()
)(createStore);

// Create store with the combinedReducer
const combinedReducers = combineReducers({
    CMSReducer,
    ReduxFormReducer,
    form: reduxFormReducer // redux-form reducer mounted under form.
});

const configureStore = function() {
    const store = createStoreWidthMiddleware(combinedReducers);
    return store;
}

export default configureStore;
