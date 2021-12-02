const Card = require('./Card.js');
const Deck = require('./Deck.js');
const Round = require('./Round.js');
const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.currentRound = null;
  }

  start() {
    this.cards = prototypeQuestions.map(card => new Card(card.id, card.question, card.answers, card.correctAnswer));
    this.deck = new Deck(this.cards);
    this.currentRound = new Round(this.deck);
    this.printMessage(this.deck, this.currentRound);
    this.printQuestion(this.currentRound);
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
