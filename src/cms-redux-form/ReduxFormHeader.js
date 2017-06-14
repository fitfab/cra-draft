
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Field, FieldArray, reduxForm, propTypes, } from 'redux-form';
import * as actionCreators from './actionCreators';
import { RenderField } from './components/customField';
// import FieldArraysForm from './components/fieldArray';

import './cms-redux-form.css';

const renderList = ({ fields }) => {
    console.log('fields: ', fields)
    return (
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
}



const FieldArraysForm = props => {
    const {handleSubmit, pristine, reset, submitting, initialValues} = props;
    const fields = initialValues.list

    console.log('FieldArraysForm', fields)

    return(
        <form onSubmit={handleSubmit(()=>console.log('Submit: ',this))}>
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


// NOTE: I want this to be the container for the form
class RFHeader extends Component {

    // es7
    static propTypes = {
        ...propTypes
    }

    componentDidMount() {
        console.log('header Mounted ');
        console.log(this.props)
        // initialValues: {list: state.ReduxFormReducer.list},
    }


    showListCount() {
        const { initialValues } = this.props;
        return(<span>Handling {initialValues.list.length} item(s)</span>)
    }



    render() {
        console.log('Render: ',this.props)
        return(
            <div>
                <h3>Redux Form {this.showListCount()}</h3>
                {FieldArraysForm(this.props)}

            </div>
        )
    }
}

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
RFHeader =  reduxForm({
    form: 'headerFieldForm' // unique identfier for this form
})(RFHeader);

// You have to connect() to any reducers that you wish to connect to yourself
RFHeader = connect(
    state => ({
    initialValues: {list: state.ReduxFormReducer.list}, // pull initial values from account reducer
  }),
  { getList: actionCreators.getList}
)(RFHeader);

export default RFHeader;
