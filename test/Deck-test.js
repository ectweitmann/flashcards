const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck.js');
const Card = require('../src/Card.js');
const data = require('../src/data.js').prototypeData;

describe('Deck', function() {
  const card1 = null;
  const card2 = null;
  const card3 = null;
  const deck = null;
  beforeEach('Declare an instance of Deck initialzed with an array of Cards'), function() {
    card1 = new Card(data[1].id, data[1].question, data[1].answers, data[1].correctAnswer);
    card2 = new Card(data[2].id, data[2].question, data[2].answers, data[2].correctAnswer);
    card3 = new Card(data[3].id, data[3].question, data[3].answers, data[3].correctAnswer);
    deck = new Deck([card1, card2, card3]);
  });

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    expect(deck).to.be.an.instanceof(Deck);
  });
});
