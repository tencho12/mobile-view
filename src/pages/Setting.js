import React, { Component } from 'react';
import Header from '../components/Header'
import axios from 'axios'
import { updateSensorValues } from '../components/UserFunctions';


export class Setting extends Component {
    constructor() {
        super()
        this.state = {
            heaterOnAt: '',
            heaterOffAt: '',
            lightOnAt: '',
            lightOffAt: '',
            fanOnAt: '',
            fanOffAt: '',
            error:true
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const newValues = {
            heaterOnAt: this.state.heaterOnAt,
            heaterOffAt: this.state.heaterOffAt,
            lightOnAt: this.state.lightOnAt,
            lightOffAt: this.state.lightOffAt,
            fanOnAt: this.state.fanOnAt,
            fanOffAt: this.state.fanOffAt,
        }

        updateSensorValues(newValues).then(res => {
            this.setState({
                error:res.error
            })
        })
    }

    componentDidMount() {

        axios.get('sensorValues', {
        }).then(res => {
            this.setState({
                heaterOnAt: res.data[2].value,
                heaterOffAt: res.data[3].value,
                lightOnAt: res.data[4].value,
                lightOffAt: res.data[5].value,
                fanOnAt: res.data[0].value,
                fanOffAt: res.data[1].value,
            })
           // console.log(this.state.heaterOnAt)

        })
    }
    render() {
        const ErrorHandler = (
            <div className="container">
                <div className="alert alert-success alert-dismissible">
                    <a href="ten.co" className="close" data-dismiss="alert" aria-label="close">&times;</a>
                    <strong>Successfully Updated the Default values.</strong>
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
                <div className="card-header"><b>Sensor Values</b></div>
                <div className="card-body">
                    <div className="container">
                        <div className="col-sm-12">
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a href="t.com" data-target="#currentValues" data-toggle="tab" className="nav-link active">Current Values</a>
                                </li>
                                <li className="nav-item">
                                    <a href="t.com" data-target="#edit" data-toggle="tab" className="nav-link">Edit</a>
                                </li>
                            </ul>
                        </div>
                        <div className="tab-content">
                            <div className="tab-pane active" id="currentValues">
                                <div className="container">
                                    <table className="table table-light table-hover table-lg">
                                        <tbody>
                                            <tr>
                                                <td>Heater On At: </td>
                                                <td>{this.state.heaterOnAt}</td>
                                            </tr>
                                            <tr>
                                                <td>Heater Off At: </td>
                                                <td>{this.state.heaterOffAt}</td>
                                            </tr>
                                            <tr>
                                                <td>Light On At: </td>
                                                <td>{this.state.lightOnAt}</td>
                                            </tr>
                                            <tr>
                                                <td>Light Off At: </td>
                                                <td>{this.state.lightOffAt}</td>
                                            </tr>
                                            <tr>
                                                <td>Fan On At: </td>
                                                <td>{this.state.fanOnAt}</td>
                                            </tr>
                                            <tr>
                                                <td>Fan Off At: </td>
                                                <td>{this.state.fanOffAt}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="tab-pane" id="edit">

                                {this.state.error? noError : ErrorHandler}
                               
                                <form noValidate onSubmit={this.onSubmit}>
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-form-label form-control-label">Heater On At</label>
                                        <div className="col-sm-9">
                                            <input className="form-control" name="heaterOnAt" type="number" value={this.state.heaterOnAt}
                                                onChange={this.onChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-form-label form-control-label">Heater Off At</label>
                                        <div className="col-sm-9">
                                            <input className="form-control" name="heaterOffAt" type="number" value={this.state.heaterOffAt}
                                                onChange={this.onChange} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-sm-3 col-form-label form-control-label">Light On At</label>
                                        <div className="col-sm-9">
                                            <input className="form-control" name="lightOnAt" type="number" value={this.state.lightOnAt}
                                                onChange={this.onChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-form-label form-control-label">Light Off At</label>
                                        <div className="col-sm-9">
                                            <input className="form-control" name="lightOffAt" type="number" value={this.state.lightOffAt}
                                                onChange={this.onChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-form-label form-control-label">Fan On At</label>
                                        <div className="col-sm-9">
                                            <input className="form-control" name="fanOnAt" type="number" value={this.state.fanOnAt}
                                                onChange={this.onChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-form-label form-control-label">Fan On At</label>
                                        <div className="col-sm-9">
                                            <input className="form-control" name="fanOffAt" type="number" value={this.state.fanOffAt}
                                                onChange={this.onChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-form-label form-control-label"></label>
                                        <div className="col-sm-9">
                                            <input type="submit" className="btn btn-primary btn-sm" value="Update" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default Setting
