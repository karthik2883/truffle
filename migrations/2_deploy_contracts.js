var Bitney = artifacts.require('Bitney');
module.exports = function (deployer) {
 // Bitney(100000000000000,"Bitney",8,"BTN");
  deployer.deploy(Bitney,100000000000000,"Bitney",8,"BTN");
  
};
