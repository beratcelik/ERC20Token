var BigNumber = require('bignumber.js');

const sampleToken = artifacts.require("sampleToken");
const name = "Lega";
const symbol = "Lega";
const powered = 18+9;
const initialSupply = new BigNumber ( Math.pow(10, powered) ); // 10000 Lega

module.exports = function (deployer) {
    deployer.deploy(sampleToken, name, symbol, initialSupply);
};
