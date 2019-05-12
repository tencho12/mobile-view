import React, { Component } from 'react'
import Header from '../components/Header'
import MainContent from '../components/MainContent'
import Footer from '../components/Footer'
import axios from 'axios'

export class home extends Component {
  state = {
    comp: [],
    key:0
  }
  keyUpdater() {
    return this.setState(this.state.key + 1);
  }
  
  markComplete = (id) => {
    this.setState(
      {
        comp: this.state.comp.map(comp => {
          var comp_id = comp.component_id;
          var auto = 0;
          if (comp.component_id === id) {
            if (comp.status === 1) {
              auto = 0;
              axios.post('updateStatus', {
                comp_id,
                auto
              });
              comp.status = 0;
            }
            else {
               auto = 1;
              axios.post('updateStatus', {
                comp_id,
                auto
              });
              comp.status = 1;
            }
          }
          return comp;
        })
      }
    );
  }

  makeAutomatic = (id) => {
    this.setState(
      {
        comp: this.state.comp.map(comp => {
          var room_id = comp.room_id;
          var auto;
          if (comp.room_id === id) {
            if (comp.automated === 1) {
              auto = 0;
              axios.post('updateAuto', {
                room_id,
                auto
              });
              comp.automated = 0;
            } else {
              auto = 1;
              axios.post('updateAuto', {
                room_id,
                auto
              });
              comp.automated = 1;
            }
          }
          return comp;
        })
      }
    );
  }

  componentDidMount() {
    axios.get('home').then(res => {
      this.setState({ comp: res.data })
    })

  }
  

  render() {
    return (
      <div>
        <Header/><br />
        <MainContent comp={this.state.comp} markComplete={this.markComplete} makeAutomatic={this.makeAutomatic} />
        <Footer/>
      </div>
    )
  }
}
export default home
