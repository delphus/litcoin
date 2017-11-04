import React, { Component } from 'react';

class NewEditor extends Component {
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

export default NewEditor;
