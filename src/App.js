import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navigation from './Navigation';
import LitManager from './LitManager';
import Editor from './Editor';
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

        <LitManager />

        <Route path="/" exact component={Navigation} />
        <Route path="/doc" component={Editor} />
      </div>
    );
  }
}

export default App;
