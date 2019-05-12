import React, { Component } from 'react'

export class ContentBody extends Component {
    state = {
        count:1
    }
    // componentDidMount() {
    //     if (this.props.data.automated === 1) {
    //         return {
    //             checked: true
    //         }
    //     } else {
    //         console.log("else")
    //     }
    // }
    
    getStyle = () => {
        if (this.props.data.automated) {
            return {
                checked: true,
                textDecoration: this.props.data.automated ?
                    'line-through' : 'none'
            }
        } else {
            return {
                checked:false
            }
        }
    }
    
   
    render() {
        const { component_id } = this.props.data;
        return (
                 <div className="container">
                    <div>
                        <button type="button" className="btn btn-outline-info btn-sm btn-block" data-toggle="collapse"
                            data-target={"#"+this.props.data.room_id} aria-expanded="false" aria-controls="collapseExample1">
                            {this.props.data.room_name}
                        </button>
                        <hr />
                        <div className="collapse" id={this.props.data.room_id}>
                            <div className="card card-body">
                            <div className="row" >
                                <p>   
                                    <input type="checkbox" onChange={this.props.makeAutomatic.bind(this,this.props.data.room_id)}></input>&nbsp;
                                    Automatic
                                </p>
                                </div>
                            </div>&nbsp;<br />
                            <table className="table table-bordered table-dark table-sm">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Appliances</th>
                                        <th scope="col">status</th>
                                        <th scope="col">Turn ON/OFF</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{this.state.count}</td>
                                        <td>{this.props.data.component_name}</td>
                                        <td>{this.props.data.status}</td>
                                        {/* <td><div style={this.getStyle()}>Turn on or off</div></td> */}
                                        <td><div>
                                        <input type="checkbox" onChange={this.props.markComplete.bind(this, component_id)}></input>
                                        </div></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                </div>
            </div>
        );
  }
}

export default ContentBody
