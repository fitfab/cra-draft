import React, { Component } from 'react';

import Item from './item';
import HeaderForm from './headerForm';

class List extends Component {

    componentDidMount(){
        const { cmsActions } = this.props;
        cmsActions.getList();
    }

    shouldComponentUpdate(nextProps) {
        if (this.props.CMS.list.length !== nextProps.CMS.list.length) {
            return true;
        } else {
            return false;
        }
    }

    renderList() {
        const { list } = this.props.CMS;

        return list.map( (item, index) => {

            console.log('item: ',item);
            return (<Item key={index} headers={item} onChange={(e)=>{console.log(e.target.value)}} />)
        });
    }

    render() {
        console.log(this.props.CMS)
        // const { list } = this.props.CMS;
        // console.log(list)
        return(
            <div>
                <h3>The List</h3>
                <HeaderForm formData={this.props.CMS} />
                {this.renderList()}
            </div>
        )
    }
}

export default List;
