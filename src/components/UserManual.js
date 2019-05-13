import React, { Component } from 'react'

export class UserManual extends Component {
  render() {
    return (
      <div>
            <div className="card">
          <div className="card-header">
            <a className="card-link" data-toggle="collapse" href="#collapseTwo">
                        User manual
            </a>
                </div>
          <div id="collapseTwo" className="collapse" data-parent="#accordion">
            <div className="card-body">
                        <h6> Step 1: Check that you have a strong Wi-Fi or mobile data connection.</h6>
                        First make sure that you have a strong Internet connection either through Wi-Fi or mobile data
                connection.<br />

                        <h6> Step 2: Clear the cache and data of the home auto app.</h6>

                        1. Go to settings app.<br />
                        2. Tap App and Notification<br />
                        3. Chose home auto app<br />
                        4. Tap Storage > Clear Cache<br />
                        5. Next, tap Clear Data<br />

                        <h6>Step 3: Restart your device.</h6>
                        Press and hold the power button until your device turns on again.
            </div>
                </div>
            </div>
      </div>
    )
  }
}

export default UserManual
