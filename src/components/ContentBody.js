import React, { Component } from 'react'
import axios from 'axios'
import TableData from '../components/TableData'
import SensorValues from './SensorValues';


export class ContentBody extends Component {
    state = {
        status: [],
        room_id: '',
        temp:[]
    }
    componentDidMount() {
        this.setState({
            room_id: this.props.data.room_id
        })
        
        axios.post('getTemperature', {
        room_id:this.props.data.room_id
        }).then(res => {
            this.setState({
                temp: res.data
            })
        });
    }


     markComplete = (id) => {
    this.setState(
      {
            status: this.state.status.map(comp => {
          var comp_id = comp.component_id;
          var auto = 0;
          if (comp.component_id === id) {
            if (comp.status === 1) {
              auto = 0;
              axios.post('updateStatus', {
                comp_id,
                auto
              });
              comp.status = !comp.status;
            }
            else {
               auto = 1;
              axios.post('updateStatus', {
                comp_id,
                auto
              });
              comp.status = !comp.status;
            }
          }
          return comp;
        })
      }
    );
  }


   
    getStatus = (id) => {
        axios.post('getStatus', {
            room_id: id
        }).then(res => {
            this.setState({
                status: res.data
            })
        })
        // console.log(id)
    }

    render() {

        const { automated } = this.props.data;
        return (
            <div className="container">
                <div>
                    <button type="button" className="btn btn-outline-info btn-sm btn-block" data-toggle="collapse"
                        data-target={"#" + this.props.data.room_id} aria-expanded="false" aria-controls="collapseExample1"
                        onClick={this.getStatus.bind(this, this.props.data.room_id)}
                    >
                        {this.props.data.room_name}
                    </button>
                    <hr />
                    <div className="collapse" id={this.props.data.room_id}>
                        <div className="card card-body">
                            <div className="row" >
                                <p>
                                    <input type="checkbox" checked={automated ? 'checked' : ''} onChange={this.props.makeAutomatic.bind(this, this.props.data.room_id)}></input>&nbsp;
                                    Automatic
                                </p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                   {this.state.temp.map((data) => (
                                       <SensorValues key={data.id} data={data} />
                                   ))}
                            <p><b></b></p>&nbsp;&nbsp;
                            </div>
                        </div>&nbsp;<br />
                        <table className="table table-bordered table-dark table-sm">
                            <thead>
                                <tr>
                                    <th scope="col">Appliances</th>
                                    <th scope="col">status</th>
                                    <th scope="col">Turn ON/OFF</th>
                                </tr>
                            </thead>

                            {this.state.status.map((data) => (
                                <tbody>
                                    <TableData data={data} automated={automated} markComplete={this.markComplete}/>
                                </tbody>
                            ))
                            }
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContentBody
