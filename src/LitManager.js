import React from 'react';
import Web3 from 'web3';

let web3;
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
  } else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }

export default function LitManager() {
  return (
    <div className="Web3">
      <h2>Web3</h2>
      <p>Initialized <code>Web3</code> object for easy interfacing of Ethereum JavaScript API.</p>
      <dl>
        <dt>Connected Ethereum node (Web3 provider)</dt>
        <dd>{web3.currentProvider.host}</dd>
        <dt>Latest block</dt>
        <dd>{web3.eth.blockNumber}</dd>
        <dt>Accounts</dt>
        <dd>
          {Array.prototype.forEach(
            (account) => <div key={account}>{account}</div>
          , web3.eth.accounts)}
        </dd>
      </dl>
    </div>
  );
}