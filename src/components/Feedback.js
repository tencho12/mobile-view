import React, { Component } from 'react'
import axios from 'axios'



export class Feedback extends Component {
    state = {
        comments:'',
        email: localStorage.getItem('email'),
        err: '',
        mess:''
    }
    getStyle = () => {
        return {
            width: '100 %',
            height: '100 %',
            display: 'none'
        }
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();

        axios.post('/comments', {
            comment: this.state.comments,
            email: this.state.email
        }).then((res) => {
            if (!res.data.err) {
                this.setState({
                    err: res.data.err,
                    mess: res.data.mess
                })
            } else {
                this.setState({
                    err: res.data.err,
                    mess:res.data.mess

                })
            }
                
        })
        
    }
    render() {
        const ErrorHandler = (
            <div className="container">
                <div className="alert alert-success alert-dismissible">
                    <a href="no.co" className="close" data-dismiss="alert" aria-label="close">&times;</a>
                    <strong>{this.state.mess}</strong>
                </div>
            </div>
        )
        const noError = (
            <div className="container">
            </div>
        )

        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        <a className="collapsed card-link" data-toggle="collapse" href="#collapseThree">
                            Feedback
                    </a>
                    </div>
                    <div id="collapseThree" className="collapse" data-parent="#accordion">
                        
                        <div className="card-body">
                            {this.state.err ? ErrorHandler : noError}
                            <p>Please submit any queries or feedback below:</p>
                            <form noValidate onSubmit={this.onSubmit}>
                                <div className="row">
                                    <div className="col-sm-12 form-group">
                                        <label>
                                            Comments:</label>
                                        <textarea className="form-control" type="textarea" name="comments"
                                            placeholder="Your query" maxLength="6000" rows="7"
                                            value={this.state.comment}
                                            onChange={this.onChange}
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 form-group">
                                        <button type="submit" className="btn btn-lg btn-warning btn-block">Post </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Feedback
