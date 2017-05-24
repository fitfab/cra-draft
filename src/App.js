import React, { Component } from 'react';
import { string, shape, array, bool, func } from 'prop-types';
import logo from './logo.svg';

import Form from "react-jsonschema-form";

import './App.css';

class App extends Component {

    // Static properties (ES7)
    static propTypes = {
        schema: shape({
            title: string,
            type: string,
            required: array,
            propperties: shape({
                title: shape({
                    type: string,
                    title: string,
                    default: string
                }),
                done: shape({
                    type: bool,
                    title: string,
                    default: bool
                })
            })
        }),
        log: func
    }

    static defaultProps = {
        schema : {
            title: "Todo",
            type: "object",
            required: ["title"],
            properties: {
                title: {type: "string", title: "Title", default: "A new task"},
                done: {type: "boolean", title: "Done?", default: false}
            }
        },
        log: (type) => console.log.bind(console, type)
    }

    render() {
        const {
            schema,
            log
        } = this.props;
        return (
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to React</h2>
            </div>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
<Form
    className="new-form"
    schema={schema}
    onChange={log("changed")}
    onSubmit={log("submitted")}
    onError={log("errors")} />

          </div>
        );
    }
}

export default App;