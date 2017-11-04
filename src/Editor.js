import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import uuid from 'uuid/v4';

class Editor extends Component {
  click() {
    window.location.href = "#" + uuid();
  }
  render() {
    return (
      <div>
        <h2>Editor</h2>
      </div>
    );
  }
}

export default Editor;
