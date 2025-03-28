const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn.js');
const Card = require('../src/Card.js');
const data = require('../src/test-data.js').testData;

describe('Turn', function() {
  let card;
  let turn;
  beforeEach('Create an instance of the Card and Turn class', function() {
    card = new Card(data[1].id, data[1].question, data[1].answers, data[1].correctAnswer);
    turn = new Turn(data[1].correctAnswer, card);
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a user\'s guess', function() {
    expect(turn.guess).to.equal('array');
  });

  it('should store the current card in play', function() {
    expect(turn.currentCard).to.equal(card);
  });

  it('should be able to return a user\'s guess', function() {
    const guess = turn.returnGuess();

    expect(guess).to.equal('array');
  });

  it('should be able to return the current card', function() {
    const currentCard = turn.returnCard();

    expect(currentCard).to.equal(card);
  });

  it('should be able to evaluate if a user\'s guess matches the correct answer on the card', function() {
    const doesMatch = turn.evaluateGuess();

    expect(doesMatch).to.equal(true);
  });

  it('should be able to evaluate if a user\'s guess does not match the correct answer on the card', function() {
    turn.guess = 'object';
    const doesMatch = turn.evaluateGuess();

    expect(doesMatch).to.equal(false);
  });

  it('should be able to inform a user that their guess is correct', function() {
    const feedback = turn.giveFeedback();

    expect(feedback).to.equal('correct!');
  });

  it('should be able to inform a user that their guess is incorrect', function() {
    turn.guess = 'object';
    const feedback = turn.giveFeedback();

    expect(feedback).to.equal('incorrect!');
  });
});
