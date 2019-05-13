import React, { Component } from 'react'
import { login } from '../components/UserFunctions';
import HeaderLogin from '../components/HeaderLogin';
import Footer from '../components/Footer';



export class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      iserror: 'false',
      error:''
    }
  }
 
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });


  onSubmit = (e) => {
    e.preventDefault();
   
    const user = {
      email: this.state.email,
      password: this.state.password
    }
    login(user).then(res => {
      if (!res.errorOccurred) {
        this.props.history.push('/home')
      } else {
        this.setState({
          error: 'Either email or password is incorrect..',
          iserror:'true'})
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
        <HeaderLogin />
        <div className="container align-center">
          <form noValidate onSubmit={this.onSubmit}><br/>
            <input type="email" name="email" placeholder="email ..." className="form-control" value={this.state.email}
              onChange={this.onChange} /><br/>
            <input type="password" name="password" placeholder="password ..." className="form-control" value={this.state.password}
              onChange={this.onChange}/><br />
            <input type="submit" value="Login" className="form-control btn btn-primary" /><br /><br />
            <a href="signup">Sign up if you did not!</a>
          </form>
          </div>
         {this.state.iserror==='false' ? noError : ErrorHandler }
          <Footer />
      </div>
    )
  }
}


export default Login
