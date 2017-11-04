import React, { Component } from 'react';

class Editor extends Component {
  upload() {
    // upload to ipfs
  }
  render() {
    return (
      <div>
        <h2>Editor</h2>
        <textarea /><br />
        <button onClick={this.upload}>Upload</button>
      </div>
    );
  }
}

export default Editor;
