import React, { Component } from 'react';
import './item.css'

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
            <fieldset className="item">
                <h3>{type}</h3>
                <label>{label}</label>
                <input type="text" defaultValue={content} onChange={this.props.onChange} />
                <input type="submit" value={button} />
            </fieldset>
        )
    }
}
