import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'


export class Profile extends Component {
    constructor() {
        super()
      this.state = {   
        user_name: '',
        email: '',
        password: '',
        location: '',
        house_number:''
        }
  }
  
  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token)
    this.setState({
      user_name: decoded.user_name,
      email: decoded.email,
      password: decoded.password,
      location: decoded.location,
      house_number: decoded.house_number
    })
  }
  render() {
    return (
      <div>
        <h1>Profile page</h1>
        <h1>{this.state.user_name}</h1>
      </div>
    )
  }
}

export default Profile
