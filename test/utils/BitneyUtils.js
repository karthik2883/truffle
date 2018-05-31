module.exports = function (CNTR, accounts) {
  // checks whether the expected value of totalSupply is the current value
  function checksTotalSupply (expectedValue) {
    it('totalSupply should be equal to ' + expectedValue, function (done) {
        CNTR.deployed().then(function (instance) {
        instance.totalSupply.call().then(function (totalSupply) {
        console.log(totalSupply);
        assert.equal(totalSupply, expectedValue
          , 'totalSupply is not equal to ' + expectedValue);
        }).then(done).catch(done);
      });
    });
  };
  function checksName (expectedValue) {
    it('Name should be equal to ' + expectedValue, function (done) {
        CNTR.deployed().then(function (instance) {
        instance.name.call().then(function (nm) {
        console.log(nm);
        assert.equal(nm, expectedValue
          , 'Name is not equal to ' + expectedValue);
        }).then(done).catch(done);
      });
    });
  };
  function checksSymbol (expectedValue) {
    it('Symbol should be equal to ' + expectedValue, function (done) {
        CNTR.deployed().then(function (instance) {
        instance.symbol.call().then(function (symbol) {
        assert.equal(symbol, expectedValue
          , 'Symbol is not equal to ' + expectedValue);
        }).then(done).catch(done);
      });
    });
  };

  function checksBurn() {
    it('Burn the token', function (done) {
        CNTR.deployed().then(async function (instance) {
        var events = instance.allEvents();
        console.log("ac",accounts);
        await instance.burn(10000000, { from: accounts[0] })
        .then(function (result) {
            console.log(result);
         // assert.include(result.logs[0].event, 'TokenCreated', 'TokenCreated event was not triggered');
        //  assert.equal(result.logs[0].args.name, name);
          assert.equal(log.event, "Error", "Event must be an Error");
        });
      }).then(done).catch(done);
    });
  }
 

  return {
  /** Token Details */
    checksTotalSupply: checksTotalSupply,
    checksName:checksName,
    checksSymbol:checksSymbol,
    checksBurn:checksBurn    
  };
};
