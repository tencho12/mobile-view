import React, { Component } from 'react'

export class Feedback extends Component {
    getStyle=()=> {
        return {
            width: '100 %',
            height: '100 %',
            display: 'none' 
        }
    }
  render() {
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
                    <p>Please provide your feedback below:</p>
                <form method="post" id="reused_form">
                            <div className="row">
                                <div className="col-sm-12 form-group">
                            <label>How do you rate your overall experience?</label>
                            <p>
                                <label className="radio-inline">
                                    <input type="radio" name="experience" id="radio_experience" value="bad"/>
                                    Bad
                                </label>
                                        <label className="radio-inline">
                                    <input type="radio" name="experience" id="radio_experience" value="average"/>
                                    Average
                                </label>
    
                                        <label className="radio-inline">
                                    <input type="radio" name="experience" id="radio_experience" value="good"/>
                                    Good
                                </label>
                            </p>
                        </div>
                    </div>
                            <div className="row">
                                <div className="col-sm-12 form-group">
                            <label>
                                Comments:</label>
                                    <textarea className="form-control" type="textarea" name="comments" id="comments"
                                placeholder="Your Comments" maxLength="6000" rows="7"></textarea>
                        </div>
                    </div>
                            <div className="row">
                                <div className="col-sm-6 form-group">
                            <label>
                                Your Name:</label>
                                    <input type="text" className="form-control" id="name" name="name" required/>
                        </div>
                                <div className="col-sm-6 form-group">
                            <label>
                                Email:</label>
                                    <input type="email" className="form-control" id="email" name="email" required/> 
                            </div>
                    </div>
    
                            <div className="row">
                                <div className="col-sm-12 form-group">
                                    <button type="submit" className="btn btn-lg btn-warning btn-block">Post </button>
                        </div>
                    </div>
                </form>
                {/* <div id="success_message" style={this.getStyle}>
                    <h3>Posted your feedback successfully!</h3>
                </div>
                        <div id="error_message" style={this.getStyle}>
                    <h3>Error</h3>
                    Sorry there was an error sending your form.
    
                </div> */}
            </div>
        </div>
    </div>
      </div>
    )
  }
}

export default Feedback
