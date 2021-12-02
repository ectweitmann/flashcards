class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = deck[0];
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }
}

module.exports = Round;
