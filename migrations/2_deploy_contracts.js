//const HelloName = artifacts.require("HelloName");
const HelloName = artifacts.require("HelloName");

module.exports = function (deployer) {
  deployer.deploy(HelloName);
}