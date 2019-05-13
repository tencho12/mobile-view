import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { updateProfile } from '../components/UserFunctions';


export class Profile extends Component {
  constructor() {
    super()
    this.state = {
      user_id: '',
      user_name: '',
      email: '',
      cpassword: '',
      password: '',
      location: '',
      house_number: '',
      error:'',
      errorOccurred:'false'
      
    }
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token)
    this.setState({
      user_id: decoded.user_id,
      user_name: decoded.user_name,
      email: decoded.email,
      password: decoded.password,
      location: decoded.location,
      house_number: decoded.house_number
    })
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const user = {
      user_id: this.state.user_id,
      user_name: this.state.user_name,
      email: this.state.email,
      password: this.state.password,
      cpassword: this.state.cpassword,
      location: this.state.location,
      house_number: this.state.house_number
    }

    updateProfile(user).then(res => {
      console.log(res)
      if (!res.errorOccurred) {
        console.log('inside if')
        this.props.history.push('/Login')
      } else {
        console.log('inside else')

        this.setState({
          error: 'The passwords does not match.',
          errorOccurred: 'true'
        })
      }
    })
  }

  render() {
    const ErrorHandler = (
      <div className="container">
        <div className="alert alert-warning alert-dismissible">
          <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
          <strong>{this.state.error}</strong>
        </div>
      </div>
    )
    const noError = (
      <div className="container">
      </div>
    )
    return (
      <div>
        <Header />
        <div className="card text-center">
          <div className="card-header">User Profile</div>
          <div className="card-body">
            <div className="container">
              <div className="col-sm-12">
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <a href="t.com" data-target="#profile" data-toggle="tab" className="nav-link active">Profile</a>
                  </li>
                  <li className="nav-item">
                    <a href="t.com" data-target="#edit" data-toggle="tab" className="nav-link">Edit</a>
                  </li>
                </ul>
              </div>
              <div className="tab-content">
                <div className="tab-pane active" id="profile">
                  <div className="container">
                    <table className="table table-light table-hover table-lg">
                      <tbody>
                        <tr>
                          <td>UserName</td>
                          <td>{this.state.user_name}</td>
                        </tr>
                        <tr>
                          <td>Email</td>
                          <td>{this.state.email}</td>
                        </tr>
                        <tr>
                          <td>Location</td>
                          <td>{this.state.location}</td>
                        </tr>
                        <tr>
                          <td>HouseNo</td>
                          <td>{this.state.house_number}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="tab-pane" id="edit">

                  {this.state.errorOccurred === 'false' ? noError : ErrorHandler}

                  <form noValidate onSubmit={this.onSubmit}>
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label form-control-label">Username</label>
                      <div className="col-sm-9">
                        <input className="form-control" name="user_name" type="text" value={this.state.user_name}
                          onChange={this.onChange} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label form-control-label">Email</label>
                      <div className="col-sm-9">
                        <input className="form-control" type="email" name="email" value={this.state.email}
                          onChange={this.onChange} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label form-control-label">Location</label>
                      <div className="col-sm-9">
                        <input className="form-control" type="text" name="location" value={this.state.location}
                          onChange={this.onChange} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label form-control-label">House_No</label>
                      <div className="col-sm-9">
                        <input className="form-control" type="text" name="house_number" value={this.state.house_number}
                          onChange={this.onChange} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label form-control-label">Current Password</label>
                      <div className="col-sm-9">
                        <input className="form-control" type="password" name="cpassword"
                          onChange={this.onChange} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label form-control-label">new password</label>
                      <div className="col-sm-9">
                        <input className="form-control" type="password" name="password" onChange={this.onChange} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label form-control-label"></label>
                      <div className="col-sm-9">
                        <input type="hidden" name="user_id" />
                        <input type="reset" className="btn btn-secondary btn-sm" value="Cancel" />&nbsp;
                            <input type="submit" className="btn btn-primary btn-sm" value="Update Changes" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <Footer/>
      </div>

    )
  }
}

export default Profile
