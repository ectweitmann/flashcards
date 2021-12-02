const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game.js');
const Card = require('../src/Card.js');
const Deck = require('../src/Deck.js');
const Round = require('../src/Round.js');
const data = require('../src/test-data.js').testData;

describe('Game', function () {
  let game;
  before('Declare and initiliaze Game instance', function() {
    game = new Game();
  });

  afterEach('Invoke start() method', function() {
    game.start();
  })

  it('should keep track of the current round', function() {
    expect(game.currentRound).to.equal(null);
  });

  it('should create cards', function() {
    expect(game).to.have.property('cards');
    expect(game.cards).to.have.lengthOf(30);
    expect(game.cards[0]).to.be.an.instanceof(Card);
  });

  it('should put cards in a deck', function() {
    expect(game).to.have.property('deck');
    expect(game.deck).to.be.an.instanceof(Deck);
    expect(game.deck.cards).to.deep.equal(game.cards);
  });

  it('should create a new Round using the deck', function() {
    expect(game.currentRound).to.be.an.instanceof(Round);
    expect(game.currentRound.deck).to.deep.equal(game.deck.cards);
  });
});
