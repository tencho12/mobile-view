import React, { Component } from 'react';
import ContentBody from './ContentBody';
//import PropTypes from 'prop-types'


export class MainContent extends Component {
    render() {
        console.log('data:' + this.props.data)
        return (
            <ContentBody  getStatus={this.getStatus} data={this.props.data}  makeAutomatic={this.props.makeAutomatic}/>
        );
    }
}      
            
// MainContent.propTypes = {
//     MainContent: PropTypes.array.isRequired
// }

export default MainContent
