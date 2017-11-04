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
        repo: String(Math.random() + Date.now()),
        EXPERIMENTAL: { // enable experimental features
          pubsub: true,
          sharding: true, // enable dir sharding
        }
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
        <h2 className="major">New Document</h2>
        <p>
          Please select a <strong>plain text</strong> file that you want peer edited. This will <strong>cost 20 LIT</strong>.
        </p>
        <input type="file" onChange={this.handleFileUpload} />
        {this.state.status === "WAITING" && <p>Waiting for upload...</p>}
        {this.state.status === "UPLOADING" && <p>Uploading...</p>}
        {this.state.status === "COMPLETE" &&
          <p>Document uploaded as <code>/ipfs/{this.state.hash}</code>.
            The file may take a while to show up on all IPFS nodes.</p>}
      </div>
    );
  }
}

export default NewDocument;
