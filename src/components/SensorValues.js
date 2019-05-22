import React, { Component } from 'react'

export class SensorValues extends Component {
    render() {
    
        return (
            <div>
                <p><b>{this.props.data.sensor_type}: &nbsp;</b>{this.props.data.value} &nbsp;&nbsp;</p><br/>
            </div>
        )
    }
}

export default SensorValues
