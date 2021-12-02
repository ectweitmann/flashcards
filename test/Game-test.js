const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game.js');
const Round = require('../src/Round.js');
const Deck = require('../src/Deck.js');
const Turn = require('../src/Turn.js');
const Card = require('../src/Card.js');
const data = require('../src/test-data.js').testData;

describe('Game', function () {
  let game;
  let round;
  let deck;
  let turn;
  let card1, card2, card3;
  before('Declare and initiliaze class instances', function() {
    card1 = new Card(data[0].id, data[0].question, data[0].answers, data[0].correctAnswer);
    card2 = new Card(data[1].id, data[1].question, data[1].answers, data[1].correctAnswer);
    card3 = new Card(data[2].id, data[2].question, data[2].answers, data[2].correctAnswer);
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
    game = new Game(round);
  });

  it('should keep track of the current round', function() {
    expect(game.currentRound).to.equal(null);
  });
});
