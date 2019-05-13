import React, { Component } from 'react'

export class ContactUs extends Component {
  render() {
    return (
      <div>
            <div className="card">
                <div className="card-header">
                    <a className="collapsed card-link" data-toggle="collapse" href="#collapseFour">
                        Contact us
                    </a>
                </div>
                <div id="collapseFour" className="collapse" data-parent="#accordion">
                    <div className="card-body">
                        For any inquries please follows us here @:
                        <h5>Email</h5>
                        admin@homeauto2019gmail.com
                        <h5>Twitter</h5>
                        <a href="https://twitter.com/prepbootstrap">twitter.com/prepbootstrap</a>
                        <h5>Facebook</h5>
                        <a href="https://www.facebook.com/pages/PrepBootstrap/317512588440363">PrepBootstrap Facebook Page</a>
                        <h5>Google +</h5>
                        <a href="https://plus.google.com/106176842853126835580/posts?hl=en">Google + Page</a>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}

export default ContactUs
