import React, { Component } from 'react';

class NewEditor extends Component {
  upload() {
    const IPFS = require('ipfs')
    const node = new IPFS()
    ipfs.files.add(data, function(err, files) {
    });
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
