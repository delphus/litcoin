import React, { Component } from 'react';
import IPFS from 'ipfs';
import promisify from "es6-promisify";
import diff from "component-diff";
import litman from './litman';
import toString from 'stream-to-string';

class PeerEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { status: "Loading IPFS", text: "Loading..." };
    this.change = this.change.bind(this);
    this.saveSuggestion = this.saveSuggestion.bind(this);
  }
  getFromIpfs(hash) {
    return new Promise(resolve => {
      console.log('ipfs', hash);
      const node = new IPFS({
        repo: String(Math.random() + Date.now()),
        EXPERIMENTAL: { // enable experimental features
          pubsub: true,
          sharding: true, // enable dir sharding
        }
      });
      node.on('ready', () => {
        this.setState({ status: "Getting IPFS file" })
        node.files.cat(hash, async (err, stream) => {
          resolve(await toString(stream));
        });
      });
    })
    
  }
  async componentDidMount() {
    const [eth, litToken] = litman();
    const doc = await litToken.getDocument(this.props.match.params.index);
    console.log(doc);
    const text = await this.getFromIpfs(doc.hashID);
    this.setState({ text: text, newText: text });
    this.setState({ status: "Done" })
  }
  change(e) {
    this.setState({ newText: e.target.textContent });
  }
  saveSuggestion() {
    const [eth, litToken] = litman();

  }
  render() {
    return (
      <div>
        <h2 className="major">Peer Edit</h2>
        <textarea onChange={this.change}>{this.state.text}</textarea>
        
        <button>Save suggestion</button>
        <p>{this.state.status}</p>
      </div>
    );
  }
}

export default PeerEditor;
