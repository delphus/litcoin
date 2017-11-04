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
          <h2>Account Balance</h2>
          <p><code>{this.state.account}</code>:
          <strong>{this.state.balance} LIT</strong> @ block {this.state.blockNum}</p>
        </div>
      );
    }
  }
  async componentDidMount() {
    const [eth, litToken] = litman();
    this.setState({
      blockNum: (await eth.blockNumber()).toString(),
      account: await eth.coinbase(),
      // HACK: toNumber only preserves 53 bits -- if we have > like billions of LIT, this is problem
      balance: (await litToken.balanceOf(await eth.coinbase()))[0].toNumber() / 100,
      ready: true
    });
  }
}