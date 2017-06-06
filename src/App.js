import React, { Component } from 'react';
import { string, shape, array, bool, func } from 'prop-types';
import axios from 'axios';
import logo from './logo.svg';
import Navigation from './layout/nav';

import CMSContainer from './cms/container';
import Form from "react-jsonschema-form";

import './App.css';

class App extends Component {

    // Static properties (ES7)
    // static propTypes = {
    //     schema: shape({
    //         title: string,
    //         type: string,
    //         required: array,
    //         propperties: shape({
    //             title: shape({
    //                 type: string,
    //                 title: string,
    //                 default: string
    //             }),
    //             done: shape({
    //                 type: bool,
    //                 title: string,
    //                 default: bool
    //             })
    //         })
    //     }),
    //     log: func,
    //     onError: func
    //
    // }

    // static defaultProps = {
    //     schema : {
    //         title: "Todo",
    //         type: "object",
    //         required: ["title"],
    //         properties: {
    //             title: {type: "string", title: "Title", default: "A new task"},
    //             done: {type: "boolean", title: "Done?", default: false}
    //         }
    //     },
    //     log: (type) => console.log.bind(console, type),
    //     onError: (errors) => console.log("I have", errors.length, "errors to fix")
    // }
    //

    render() {
        //const { CMS, cmsActions } = this.state
        console.log(this)
        return (
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            {Navigation({"foo": "bar"})}
            <CMSContainer />
          </div>
        );
    }
}

export default App;
