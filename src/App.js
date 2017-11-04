import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import uuid from 'uuid';
import About from './About';
import Coins from './Coins';
import NewDocument from './NewDocument';
import Contact from './Contact';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header id="header">
          <div className="logo">
            <img src={logo} width="85" height="85" className="logo" alt="" />
          </div>
          <div className="content">
            <div className="inner">
              <Route path="/" exact component={About} />
              <Route path="/doc" component={NewDocument} />
              <Route path="/coins" component={Coins} />
              <Route path="/contact" component={Contact} />
            </div>
          </div>
          <nav>
            <ul>
              <li><Link to="/">Litcoin</Link></li>
              <li><Link to="/coins">Get Coin</Link></li>
              <li><Link to={"/doc/" + uuid()}>New Document</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>

        <div id="main">
          
        </div>

        <footer id="footer">
          <p className="copyright">&copy; <a href="https://github.com/undystopia">Undystopia Organization.</a></p>
        </footer>
      </div>
    );
  }
}

export default App;
