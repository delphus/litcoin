const Litcoin = artifacts.require("./LitCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(Litcoin);
};
