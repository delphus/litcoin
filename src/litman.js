import LitCoin from './contracts/LitCoin.json';
import { contract } from 'truffle-contract'; 
import Web3 from 'web3';

function getWeb3() {
  if (typeof window.web3 !== 'undefined') {
    return new Web3(window.web3.currentProvider);
  } else {
    console.log("No injected Web3 detected.");
    return new Web3("http://localhost:8545");
  }
}

export default async function litman() {
  const web3 = getWeb3();
  const litcoinContract = contract(LitCoin);
  const litcoin = await litcoinContract.deployed();
  return [web3, litcoin];
}