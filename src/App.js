import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';
import Comments from './Comments';

class App extends Component {

  state = {
    userDetails: []
  }

  componentDidMount() {
    Axios.get("https://randomuser.me/api/?results=3").then(
      (response) => {
        console.log(response.data.results);
        this.setState({
          userDetails: response.data.results
        });
      }
    ).catch(
      (response) => {
        alert("Unable to connect to randomuser.me");
      }
    )
  }
  render() {
    return (
      <center>
      <div className="App">
        <h3 className='pull-left'>Comments</h3>
        <div className="input-group">
          <span className="glyphicon glyphicon-envelope" />
          {/* <input className="inp-search" type="text" placeholder="&#xF002; Search" /> */}
          <input type="text" className="form-control inp-search" name="x" placeholder="&#xF002; Search in comments" />
        </div>
        <Comments userDetails={this.state.userDetails} />
      </div>
      </center>
    );
  }

}

export default App;
