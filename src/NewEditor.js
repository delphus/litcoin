import React, { Component } from 'react';
import IPFS from 'ipfs';

class NewEditor extends Component {
  handleFileUpload(event) {
    const fr = new FileReader();
    fr.onload = function() {
      const data = fr.result;
      const fileBuffer = new Buffer(data);
      const node = new IPFS();
      node.on('ready', () => {
        node.files.add({
          path: "/document",
          content: fileBuffer
        }, function(err, files) {
          console.log(err, files);
        });
      });
    };
    fr.readAsArrayBuffer(event.target.files[0]);
  }
  render() {
    return (
      <div>
        <h2>Upload Text File</h2>
        <input type="file" onChange={this.handleFileUpload} />
      </div>
    );
  }
}

export default NewEditor;
