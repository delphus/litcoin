import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import uuid from 'uuid/v4';

class About extends Component {
  click() {
    window.location.href = "#" + uuid();
  }
  render() {
    return (
      <div className="About">
        <h1>LitCoin</h1>
        <p>A flexible literature and peer editing based crypto token developed on the <a href="https://ethereum.org/">Ethereum Network</a>.</p>

        <Link to={"/doc/" + uuid()}>Create New Document</Link>
      </div>
    );
  }
}

export default About;
