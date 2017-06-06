import React, { Component } from 'react';
// import Form from "react-jsonschema-form";

export default class Item extends Component {

    render() {
        console.log('Item: ',this.props)
        const {
            type,
            label,
            content,
            button
        } = this.props.headers;
        return (
            <fieldset>
                <h3>{label}</h3>
                <label>{label}</label>
                <input type="text" defaultValue={content} onChange={this.props.onChange} />
                <input type="submit" value={button} />
            </fieldset>
        )
    }
}
