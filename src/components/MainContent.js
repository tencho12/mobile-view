import React, { Component } from 'react';
import ContentBody from './ContentBody';
//import PropTypes from 'prop-types'


export class MainContent extends Component {
    render() {
        return (
            
            <ContentBody getStatus={this.getStatus}  data={this.props.data}  makeAutomatic={this.props.makeAutomatic}/>
        );
    }
}

export default MainContent
