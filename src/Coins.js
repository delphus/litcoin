import React from 'react';
import litman from './litman';

export default class Coins extends React.Component {
  constructor() {
    super();
    this.state = { ready: false };
  }

  render() {
    if (this.state.ready === false) {
      return (
        <div>Loading</div>
      );
    } else {
       return (
        <div>
          <h2 className="major">Account Balance</h2>
          <p><code>{this.state.account}</code>:
          <strong>{this.state.balance} LIT</strong> @ block {this.state.blockNum}</p>
        </div>
      );
    }
  }
  async componentDidMount() {
    const [web3, litToken] = litman();
    this.setState({
      blockNum: web3.blockNumber.toString(),
      account: web3.eth.accounts[0],
      // HACK: toNumber only preserves 53 bits -- if we have > like billions of LIT, this is problem
      balance: (await litToken.balanceOf.call(web3.eth.accounts[0]))[0].toNumber() / 100,
      ready: true
    });
  }
}