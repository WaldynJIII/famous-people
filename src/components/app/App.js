import React, { Component } from 'react';
import Header from '../Header/header';
import FamousPpl from '../FamousPpl/FamousPpl.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          <FamousPpl/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        
      </div>
    );
  }
}

export default App;
