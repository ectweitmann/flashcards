const Turn = require('../src/Turn.js');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.currentCard = this.deck[0];
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    let currentTurn = new Turn(guess, this.currentCard);
    this.turns++;
    if (!currentTurn.evaluateGuess()) {
      this.incorrectGuesses.push(currentTurn.currentCard.id);
    }
    this.currentCard = this.deck[this.currentCard.id];
    return currentTurn.giveFeedback();
  }

  calculatePercentCorrect() {
    return Math.round(100 * ((this.turns - this.incorrectGuesses.length) / this.turns));
  }

  endRound() {
    console.log(`**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    return `**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
  }
}

module.exports = Round;
