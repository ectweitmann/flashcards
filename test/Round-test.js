const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round.js');
const Card = require('../src/Card.js');
const Deck = require('../src/Deck.js');
const data = require('../src/test-data.js').testData;

describe('Round', function() {
  let card1;
  let card2;
  let card3;
  let deck;
  let round;
  beforeEach('Declare and initialize instances of Card, Deck, and Round classes', function() {
    card1 = new Card(data[0].id, data[0].question, data[0].answers, data[0].correctAnswer);
    card2 = new Card(data[1].id, data[1].question, data[1].answers, data[1].correctAnswer);
    card3 = new Card(data[2].id, data[2].question, data[2].answers, data[2].correctAnswer);
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should store a deck of cards', function() {
    expect(round.deck).to.deep.equal(deck.cards);
  });

  it('should begin with no turns having been taken', function() {
    expect(round.turns).to.equal(0);
  });

  it('should begin with no incorrect guesses', function() {
    expect(round.incorrectGuesses).to.deep.equal([]);
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

    expect(round.turns).to.equal(2);
  });

  it('should record which questions were gotten wrong', function() {
    round.takeTurn('Bar Foo');

    expect(round.incorrectGuesses).to.deep.equal([1])
  });

  it('should give confirmation that a guess is correct', function() {
    const feedback = round.takeTurn('object');

    expect(feedback).to.equal('correct!');
  });

  it('should give confirmation that a guess is incorrect', function() {
    const feedback = round.takeTurn('Yahtzee!');

    expect(feedback).to.equal('incorrect!');
  });

  it('should move on to the next card in the deck after a turn', function() {
    round.takeTurn();

    expect(round.currentCard).to.equal(card2);
  });

  it('should be able to calculate and return the percentage of correct guesses', function() {
    round.takeTurn('iteration method');
    round.takeTurn('foo bar');

    const percentGuessedCorrectly = round.calculatePercentCorrect();

    expect(percentGuessedCorrectly).to.equal(50);
  });

  it('should notify the end of the round', function() {
    round.takeTurn('iteration method');
    round.takeTurn('foo bar');

    const percentGuessedCorrectly = round.calculatePercentCorrect();
    const closingRemark = round.endRound();

    expect(closingRemark).to.equal(`**Round over!** You answered 50% of the questions correctly!`);
  });
});
