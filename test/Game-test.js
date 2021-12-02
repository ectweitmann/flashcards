const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game.js');
const Card = require('../src/Card.js');
const Deck = require('../src/Deck.js');
const Round = require('../src/Round.js');
const data = require('../src/test-data.js').testData;

describe('Game', function () {
  let game;

  beforeEach('Declare and initiliaze Game instance', function() {
    game = new Game();
  });

  describe('Initial State', function() {

    it('should initiliaze correctly', function() {
      expect(game.currentRound).to.equal(null);
      expect(game.deck).to.equal(null);
    });
  });

  describe('start method', function() {

    beforeEach('Invoke start() method', function() {
      game.start();
    });

    it('should create cards', function() {
      expect(game.deck.cards).to.have.lengthOf(30);
      expect(game.deck.cards[0]).to.be.an.instanceof(Card);
    });

    it('should put cards in a deck', function() {
      expect(game.deck).to.be.an.instanceof(Deck);
    });

    it('should create a new Round using the deck', function() {
      expect(game.currentRound.deck).to.deep.equal(game.deck.cards);
    });

    it('should keep track of the current round', function() {
      expect(game.currentRound).to.be.an.instanceof(Round);
      expect(game.currentRound.turns).to.deep.equal(0);
    });
  });
});
