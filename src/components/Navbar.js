import React, { Component } from 'react'
import { withRouter} from 'react-router-dom'

export class Navbar extends Component {
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        localStorage.removeItem('email')
        this.props.history.push('/')
    }
  render() {
        const loginRegLink =(
        <div className="container">
            <li className="nav-item">
                <a className="nav-link" href="/more">info</a>
            </li>
        </div>
      )
      const userLink = (
          
        <li className="nav-item">
              <a href="rer" onClick={this.logOut.bind(this)} className="nav-link">Logout</a>
        </li>
      )

      return (
          <div className="container">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  {/* <a className="navbar-brand" href="home"><img src="images/logoDark.png" alt=""/> */}
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav mr-auto">
                          <li className="nav-item active">
                              <a className="nav-link " href="/home">Home <span className="sr-only"></span></a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="/profile">Profile</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link " href="/more">More</a>
                          </li>
                          { localStorage.usertoken ? userLink: loginRegLink }
                      </ul>
                  </div>
              </nav><br />
          </div>
      )
  }
}

export default withRouter(Navbar)
