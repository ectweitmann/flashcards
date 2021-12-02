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
}

module.exports = Round;
