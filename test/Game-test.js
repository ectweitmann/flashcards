const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game.js');
const data = require('../src/test-data.js').testData;

describe('Game', function () {
  let game;
  before('Declare and initiliaze class instances', function() {
    game = new Game();
    game.start();
  });

  it('should keep track of the current round', function() {
    expect(game.currentRound).to.equal(null);
  });
});
