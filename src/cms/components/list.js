import React, { Component } from 'react';
// import Form from "react-jsonschema-form";
import Item from './item';

class List extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        console.log(this.props)
        const { cmsActions } = this.props;
        cmsActions.getList();
    }

    shouldComponentUpdate(nextProps) {
        if (this.props.CMS.list.length !== nextProps.CMS.list.len) {
            return true;
        } else {
            return false;
        }
    }

    renderList() {
        const { list } = this.props.CMS;
        return list.map( item => {
            console.log('map', item)
            return (<Item key={item.type} headers={item} onChange={(e)=>{console.log(e.target.value)}} />)
        });
    }

    render() {
        console.log(this.props.CMS)
        return(
            <div>
                <h3>The List</h3>
                {this.renderList()}
            </div>
        )
    }
}

export default List;
