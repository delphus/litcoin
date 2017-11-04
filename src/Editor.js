import React, { Component } from 'react';

class Editor extends Component {
  upload(data) {
    const IPFS = require('ipfs')
    const node = new IPFS()
    ipfs.files.add(data, function(err, files) {
      
      
    })
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
