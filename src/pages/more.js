import React, { Component } from 'react';
import Header from '../components/Header'
import AboutUs from '../components/AboutUs'
import UserManual from '../components/UserManual'

export class more extends Component {
  render() {
    return (
      <div>
        <Header/><br/>
        <AboutUs/>
        <UserManual/>
        
      </div>
    )
  }
}

export default more
