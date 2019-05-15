import React, { Component } from 'react'

export class TableData extends Component {
    state = {
    isauto:this.props.automated
}
    

    render() {
        console.log(this.state.isauto)
        const { component_id, status } = this.props.data
        
        const automatic = (
            <td>
                Auto
            </td>
        )

        const manual = (
            <td><input type="checkbox" onChange={this.props.markComplete.bind(this, component_id)} checked={status ? 'checked' : ''} /></td>
        )
        return (         
            <tr>
                <td>{this.props.data.component_name}</td>
                <td>{this.props.data.status?'ON':'OFF'}</td>
                {this.state.isauto?automatic:manual}
            </tr>

        )
    }
}

export default TableData
