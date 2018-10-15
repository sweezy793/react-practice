import React, { Component } from 'react';
import './App.css';
import Intro from '../Intro';
import 'whatwg-fetch';

class App extends Component {

  state={
    series:[]
  }

  componentDidMount(){
    
    fetch('http://api.tvmaze.com/search/shows?q=daredevil')
    .then(response=>response.json())
    .then(json=>this.setState({series:json}))

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>My Shows</h1>  
        </header>
        <Intro message="Here you can find all of your favourite tv shows"/>
        The length of series array - {this.state.series.length}
      </div>
    );
  }
}

export default App;
