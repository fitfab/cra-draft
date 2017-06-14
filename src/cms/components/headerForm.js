import React, { Component } from 'react';
import { object } from 'prop-types';
import Form from 'react-jsonschema-form';


export default class HeaderForm extends Component {

    static propTypes = {
        list: object,
        schema: object
    }

    createSchema(list) {

        const schema = {
            "definitions": {
              "Header": {
                "type": "object",
                "properties": {
                    "title": {
                        "type": "string"
                    },
                    "content": {
                      "type": "string"
                    }
                }
              }
            },

            "type": "array",
            "title": "Gloabl Headers",
            "items": {
                "$ref": "#/definitions/Header"
            }

        }

        return schema;
    }

    render() {

        const schema = this.createSchema(this.props.formData.list);

        return (
            <Form
                schema={schema}
                formData={this.props.formData.list}
                />
        )
    }

}
