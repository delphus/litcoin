import React from 'react';
import Web3 from 'web3';

let localWeb3;
if (typeof window.web3 !== 'undefined') {
  localWeb3 = new Web3(window.web3.currentProvider);
  console.log("Is MetaMask: " + (localWeb3.currentProvider.isMetaMask === true).toString());
} else {
  console.log("No injected Web3 detected.");
  localWeb3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

export default function LitManager() {
  return (
    <div className="Web3">
      <h2>Web3</h2>
      <p>Initialized <code>Web3</code> object for easy interfacing of Ethereum JavaScript API.</p>
      <dl>
        <dt>Connected Ethereum node (Web3 provider)</dt>
        <dd>{localWeb3.currentProvider.host}</dd>
        <dt>Latest block</dt>
        <dd>{localWeb3.eth.blockNumber}</dd>
        <dt>Accounts</dt>
        <dd>
          {Array.prototype.forEach(
            (account) => <div key={account}>{account}</div>
          , localWeb3.eth.accounts)}
        </dd>
      </dl>
    </div>
  );
}