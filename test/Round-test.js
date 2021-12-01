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

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should store a Deck object', function() {
    expect(round.deck).to.be.an.instanceof(Deck);
  });

  it('should begin with no turns having been taken', function() {
    expect(round.turns).to.equal(0);
  });

  it('should begin with no incorrect guesses', function() {
    expect(round.incorrectGuesses).to.equal([]);
  });

  it('should begin with the first card in the deck as current card', function() {
    expect(round.turns).to.equal(0);
    expect(round.currentCard).to.equal(round.deck[0]);
  });

  it('should be able to return the current card', function() {
    const currentCard = round.returnCurrentCard();

    expect(currentCard).to.equal(round.currentCard);
  });

  it('should increase the the turn count by 1 after a turn is taken', function() {
    round.takeTurn();
    round.takeTurn();
    round.takeTurn();

    expect(round.turns).to.equal(3);
  });

  it('should record which questions were gotten wrong', function() {
    round.takeTurn();

    expect(round.incorrectGuesses).to.equal([round.currentCard.id])
  });

  it('should give confirmation that a guess is correct', function() {
    const feedback = round.takeTurn();

    expect(feedback).to.equal('correct!');
  });

  it('should move on to the next card in the deck after a turn' function() {
    round.takeTurn();

    expect(round.currentCard).to.equal(round.deck[1]);
  });
});
