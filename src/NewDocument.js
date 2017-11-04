import React, { Component } from 'react';
import IPFS from 'ipfs';



class NewDocument extends Component {
  constructor() {
    super();
    this.state = { status: "WAITING" };
    this.handleFileUpload = this.handleFileUpload.bind(this);
  }
  handleFileUpload(event) {
    this.setState({ status: "UPLOADING" });
    const fr = new FileReader();
    fr.onload = () => {
      const data = fr.result;
      const fileBuffer = new Buffer(data);
      const node = new IPFS({
        repo: String(Math.random() + Date.now())
      });
      node.on('ready', () => {
        node.files.add({
          path: "/document",
          content: fileBuffer
        }, (err, files) => {
          this.setState({ status: "COMPLETE", hash: files[0].hash });
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
        {this.state.status === "WAITING" && <p>Waiting for upload...</p>}
        {this.state.status === "UPLOADING" && <p>Uploading...</p>}
        {this.state.status === "COMPLETE" &&
          <p>Document uploaded as <code>/ipfs/{this.state.hash}</code>.</p>}
      </div>
    );
  }
}

export default NewDocument;
