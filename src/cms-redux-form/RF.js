import React, { Component } from 'react';
import RFHeader from './ReduxFormHeader';

class RFView extends Component {
    componentDidMount() {
        console.log(this.props);
        this.props.cmsActions.getList();
    }

    render() {
        return(
            <div>
                Welcome
                <RFHeader />
            </div>
        )
    }
}

export default RFView;
