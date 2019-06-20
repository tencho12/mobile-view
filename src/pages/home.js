import React, { Component } from 'react'
import Header from '../components/Header'
import MainContent from '../components/MainContent'
import Footer from '../components/Footer'
import axios from 'axios'



export class home extends Component {
  state = {
    comp: [],
    email:localStorage.getItem('email')
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
  
  // componentDidMount() {
  //   setInterval(() => {
  //     this.setState(() => {
  //       console.log('setting state');
  //       return { unseen: "does not display" }
  //     });
  //   }, 1000);
  // }

  componentDidMount() {

    axios.post('getDetails', {
      email: this.state.email
    }).then(res => {
      this.setState({
        comp: res.data
      })
    });

    
    
  }
  

  render() {

    return (
      <div>
        <Header />
        <div className="text-right mr-2 mb-2 mt-2">
          <a href="/home" className="btn btn-success btn-sm">Refresh</a>
        </div>
        {this.state.comp.map((data) => (
          <MainContent key={data.room_id}  data={data} makeAutomatic={this.makeAutomatic} />          
        ))}
        <Footer/>
      </div>
    )
  }
}
export default home
