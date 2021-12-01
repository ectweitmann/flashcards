const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round.js');
const Card = require('../src/Card.js');
const Deck = require('../src/Deck.js');
const data = require('../src/data.js').prototypeData;

describe('Round', function() {
  let card1 = null;
  let card2 = null;
  let card3 = null;
  let deck = null;
  let round = null;
  beforeEach('Declare and initialize instances of Card, Deck, and Round classes', function() {
    card1 = new Card(data[5].id, data[5].question, data[5].answers, data[5].correctAnswer);
    card2 = new Card(data[9].id, data[9].question, data[9].answers, data[9].correctAnswer);
    card3 = new Card(data[12].id, data[12].question, data[12].answers, data[12].correctAnswer);
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });
});
