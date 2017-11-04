import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import uuid from 'uuid';
import About from './About';
import Coins from './Coins';
import NewEditor from './NewEditor';
import Contact from './Contact';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header id="header">
          <div class="logo">
            <img src={logo} width="85" height="85" class="logo" alt="" />
          </div>
          <div class="content">
            <div class="inner">
              <Route path="/" exact component={About} />
              <Route path="/doc" component={NewEditor} />
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
          <p class="copyright">&copy; <a href="https://github.com/undystopia">Undystopia Organization.</a></p>
        </footer>
      </div>
    );
  }
}

export default App;
