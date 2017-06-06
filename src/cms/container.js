import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import List from './components/list';
import * as actionCreators from './actionCreators';

/**
 * mapStateToProps -- as the name says it.
 * map the given state to props to be pased down
 * @param  {object} the application state
 * @return {object} props for the component
 */
function mapStateToProps(state) {
    return {
        CMS: state.CMSReducer,
    };
}

/**
 * The only use case for bindActionCreators is when
 * you want to pass some action creators down to a
 * component that isn’t aware of Redux,
 * and you don’t want to pass dispatch or
 * the Redux store to it.
 *
 * @param  {function} dispatch
 * @return {object}   An object mimicking the original
 * object, but with each function immediately dispatching
 * the action returned by the corresponding action creator.
 * If you passed a function as actionCreators,
 * the return value will also be a single function.
 *
 * http://rackt.org/redux/docs/api/bindActionCreators.html
 *
 */
function mapDispatchToProps(dispatch) {

  // The only use case for bindActionCreators is when
  // you want to pass some action creators down to a
  // component that isn’t aware of Redux,
  // and you don’t want to pass dispatch or
  // the Redux store to it.
    return {
        cmsActions: bindActionCreators(actionCreators, dispatch)
    };
}

/**
 * Connects a React component(Content) to a Redux store.
 * Returns a React component class that injects state and
 * action creators into your component.
 *
 * https://github.com/rackt/react-redux/blob/master/docs/api.md
 */
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);
