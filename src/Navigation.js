import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import uuid from 'uuid/v4';

class Navigation extends Component {
  click() {
    window.location.href = "#" + uuid();
  }
  render() {
    return (
      <div className="Navigation">
          <Link to={"/doc/" + uuid()}>Create New Document</Link>
          <button></button>
      </div>
    );
  }
}

export default Navigation;
