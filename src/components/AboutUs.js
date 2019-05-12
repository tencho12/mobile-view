import React, { Component } from 'react'

export class AboutUs extends Component {
  render() {
    return (
      <div>
            <div class="card">
                <div class="card-header">
                    <a class="collapsed card-link" data-toggle="collapse" href="#collapseOne">
                        About Us
            </a>
                </div>
                <div id="collapseOne" class="collapse show" data-parent="#accordion">
                    <div class="card-body">
                        <h6>Home Automation System using IoT</h6>
                        <p> This AutoHome App present the Home Automation System
                            using Internet of Things. The problem with a current
                            controlling system is to do manually, which is not
                            user-friendly with the handicapped/elderly people,
                            no efficient and convenient way to save energy remotely.
                            To overcome all these challenges, here is the App so called
                            HomeAuto which will control all the home appliances from
                            anywhere at any time when required. The system is developed
                            using Arduino Mega ADK, Wi-Fi module ESP8622 and Sensors.
                            User can interact with the android phone and send control
                            signal to the Arduino ADK which in turn will control other
                            embedded devices/sensors.
                </p>
                    </div>
                </div>
            </div><br />
      </div>
    )
  }
}

export default AboutUs
