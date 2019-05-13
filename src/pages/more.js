import React, { Component } from 'react';
import Header from '../components/Header'
import AboutUs from '../components/AboutUs'
import UserManual from '../components/UserManual'
import Feedback from '../components/Feedback'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'


export class more extends Component {
  render() {
    return (
      <div>
        <Header/><br/>
        <AboutUs /><br />
        <UserManual /><br />
        <Feedback /><br />
        <ContactUs /><br />
        <Footer /><br />
      </div>
    )
  }
}

export default more
