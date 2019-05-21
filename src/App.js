import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
//import axios from 'axios';
import home from './pages/home';
import more from './pages/more';
import Login from './pages/Login';
import Profile from './pages/Profile'
import Setting from './pages/Setting';

export class App extends Component {

  render() {
    return (
      <Router>
          <div className="App">
          <Route exact path='/' component={ Login }/>
        <Route path='/more' component={ more } />
        <Route path='/Login' component={ Login } />
          <Route path='/home' component={ home } />
          <Route path='/profile' component={Profile} />
        <Route path='/setting' component={ Setting } />
      </div>
      </Router>
    )
  }
}


export default App
