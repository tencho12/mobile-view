import React, { Component } from 'react';
import ContentBody from './ContentBody';
//import PropTypes from 'prop-types'

export class MainContent extends Component {

    render() {
        // console.log(this.props.comp)
        return this.props.comp.map((data) => (
            <ContentBody key={data.component_id} data={data} markComplete={this.props.markComplete} makeAutomatic={this.props.makeAutomatic}/>
        ));
    }
}      
            
// MainContent.propTypes = {
//     MainContent: PropTypes.array.isRequired
// }

export default MainContent
