import React, { Component } from 'react';
import IPFS from 'ipfs';
import promisify from "es6-promisify";
import diff from "component-diff";
import litman from './litman';

class PeerEditor extends Component {
  constructor(props) {
    super(props);
    this.change = this.change.bind(this);
    this.saveSuggestion = this.saveSuggestion.bind(this);
  }
  async getFromIpfs(hash) {
    const node = new IPFS({
      repo: String(Math.random() + Date.now()),
      EXPERIMENTAL: { // enable experimental features
        pubsub: true,
        sharding: true, // enable dir sharding
      }
    });
    const nodeOn = promisify(node.on);
    const nodeCat = promisify(node.files.cat);
    await nodeOn('ready');
    return await nodeCat(hash);
  }
  async componentDidMount() {
    const text = getFromIpfs(this.props.hash);
    this.setState({ text: text, newText: text });
    const [eth, litToken] = litman();
    // load pls
  }
  change(e) {
    this.setState({ newText: e.target.textContent });
  }
  saveSuggestion() {
    const suggestion = diff(this.state.text, this.state.newText);
    // save pls
    const [eth, litToken] = litman();
    
  }
  render() {
    return (
      <div>
        <h2>Peer Edit</h2>
        <textarea onChange={this.change}>{this.state.text !== null && this.state.text}</textarea>
        <button>Save suggestion</button>
      </div>
    );
  }
}

export default PeerEditor;
