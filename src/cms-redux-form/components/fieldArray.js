import React from 'react';
import {Field, FieldArray, reduxForm} from 'redux-form'
import { RenderField } from './customField'

const renderList = ({ fields }) => (
    <div>
        {fields.map((header, index) => (
            <div key={index}>
                <Field
                    name={header.section}
                    type={header.type}
                    label={header.labeltext}
                    component={RenderField}
                    />
            </div>
        ))}
    </div>
)

const FieldArraysForm = props => {
    const {handleSubmit, pristine, reset, submitting} = props;

    return(
        <form onSubmit={handleSubmit}>
            <FieldArray
                 name="headers"
                 component={renderList}
                />
                <div>
           <button type="submit" disabled={submitting}>Submit</button>
           <button type="button" disabled={pristine || submitting} onClick={reset}>
             Clear Values
           </button>
         </div>
        </form>
    )
}

export default FieldArraysForm;
