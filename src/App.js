import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App__header">
          <img src={logo} className="App__logo" alt="" />
          <h1 className="App__title">LITcoin</h1>
          <p className="App__about">
            A flexible, peer-editing based crypto token
          </p>
        </header>
      </div>
    );
  }
}

export default App;
