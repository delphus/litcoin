import React, { Component } from 'react';
import IPFS from 'ipfs';
import promisify from "es6-promisify";
import diff from "component-diff";
import litman from './litman';
import toString from 'stream-to-string';

let ipfsready = false;

class Approval extends Component {
  constructor(props) {
    super(props);
    this.state = { status: "Loading IPFS", text: "Loading..." };
    this.approve = this.approve.bind(this);
    this.reject = this.reject.bind(this);
    this.node = new IPFS({
      repo: String(Math.random() + Date.now()),
      EXPERIMENTAL: { // enable experimental features
        pubsub: true,
        sharding: true, // enable dir sharding
      }
    });
  }
  async getFromIpfs(hash) {
    return new Promise(resolve => {
      console.log('ipfs', hash);
      
      if (!ipfsready) {
      this.node.on('ready', () => {
        ipfsready = true;
        this.setState({ status: "Getting IPFS file" })
        this.node.files.cat(hash, async (err, stream) => {
          const string = await toString(stream);
          console.log(stream);
          console.log(string);
          resolve(string);
        });
      });
    } else {
      this.setState({ status: "Getting IPFS file" })
      this.node.files.cat(hash, async (err, stream) => {
        const string = await toString(stream);
        console.log(stream);
        console.log(string);
        resolve(string);
      });
    }
      
    });
  }
  async componentDidMount() {
    const [eth, litToken] = litman();
    const doc = await litToken.getDocument(this.props.match.params.index);
    const suggested = await this.getFromIpfs(doc.editHashID);
    const text = await this.getFromIpfs(doc.hashID);
    this.setState({ text: text, suggested: suggested });
    this.setState({ status: "Done" })
  }
  async approve() {
    const [eth, litToken] = litman();
    litToken.approveEdit(
      this.props.match.params.index, { from: await eth.coinbase() });
  }
  async reject() {
    const [eth, litToken] = litman();
    litToken.rejectEdit(this.props.match.params.index, { from: await eth.coinbase() })
  }
  render() {
    return (
      <div>
        <h2 className="major">Approve Edit?</h2>
        <h3>Original</h3>
        <div>{this.state.text}</div>
        <h3>Suggested</h3>
        <div>{this.state.suggested}</div>
        
        <button onClick={this.approve}>Approve</button>
        <button onClick={this.reject}>Reject</button>
        <p>{this.state.status}</p>
      </div>
    );
  }
}

export default Approval;
