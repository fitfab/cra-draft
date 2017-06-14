import React, { Component } from 'react';

import logo from './logo.svg';
import Navigation from './layout/nav';

import RFContainer from './cms-redux-form/container';

import './App.css';

class App extends Component {

    render() {
        return (
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            {Navigation({"foo": "bar"})}
            <br/>
            <RFContainer />
          </div>
        );
    }
}

export default App;
