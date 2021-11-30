const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn.js');
const Card = require('../src/Card.js');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a user\'s guess', function() {
    const card = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const turn = new Turn('array', card);

    expect(turn.guess).to.equal('array');
  });
});
