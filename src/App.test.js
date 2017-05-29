import React from 'react';
// NOTE: Enzyme uses shallow from 'react-test-renderer'
// need to install it: npm install --save-dev react-test-renderer
import {shallow} from 'enzyme';

import App from './App';

it('renders without crashing', () => {

  shallow(<App />);

});
