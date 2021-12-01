const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck.js');
const Card = require('../src/Card.js');
const data = require('../src/test-data.js').testData;

describe('Deck', function() {
  let card1;
  let card2;
  let card3;
  let deck;
  beforeEach('Declare an instance of Deck initialzed with an array of Cards', function() {
    card1 = new Card(data[0].id, data[0].question, data[0].answers, data[0].correctAnswer);
    card2 = new Card(data[1].id, data[1].question, data[1].answers, data[1].correctAnswer);
    card3 = new Card(data[2].id, data[2].question, data[2].answers, data[2].correctAnswer);
    deck = new Deck([card1, card2, card3]);
  });

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should store an array', function() {
    expect(deck.cards).to.be.an.instanceof(Array);
  });

  it('should only be comprised of Cards', function() {
    expect(deck.cards[0]).to.be.an.instanceof(Card);
    expect(deck.cards[1]).to.be.an.instanceof(Card);
    expect(deck.cards[2]).to.be.an.instanceof(Card);
  });

  it('should be able to return the number of cards in the deck', function() {
    let numberOfCards = deck.countCards();

    expect(numberOfCards).to.equal(deck.cards.length);
  });
});
