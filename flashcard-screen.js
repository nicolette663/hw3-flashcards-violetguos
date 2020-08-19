// TODO(you): Modify the class in whatever ways necessary to implement
// the flashcard app behavior.
//
// You may need to do things such as:
// - Changing the constructor parameters
// - Rewriting some of the existing methods, such as changing code in `show()`
// - Adding methods
// - Adding additional fields

class FlashcardScreen {
  constructor(containerElement, topic) {
    this.containerElement = containerElement;
    this.topic = topic;
    this.currentCard = 0;
    this._onOneCardFinish = this._onOneCardFinish.bind(this);
    this._onContinue = this._onContinue.bind(this);
    document.addEventListener('one-card-finish', this._onOneCardFinish);
    document.addEventListener('continue-wrong-cards', this._onContinue);
    
    // keep track of wrong cards and scores
    this.numRight = 0;
    this.numWrong = 0;
    this._onCardRight = this._onCardRight.bind(this);
    this._onCardWrong = this._onCardWrong.bind(this);
    
    document.addEventListener('card-right', this._onCardRight);
    document.addEventListener('card-wrong', this._onCardWrong);


    this.wrongCards = []; 
    this.totalCards =  Object.keys( FLASHCARD_DECKS[this.topic]['words']).length;
  }

  show(cards=FLASHCARD_DECKS) {
    
    this.containerElement.classList.remove('inactive');
    const flashcardContainer = document.querySelector('#flashcard-container');
    flashcardContainer.innerHTML = '';
    // all the keys
    const keys = Object.keys(cards[this.topic]['words']);

    const card = new Flashcard(flashcardContainer, 
      keys[this.currentCard],
      cards[this.topic]['words'][keys[this.currentCard]]
    );
    if (this.currentCard == this.totalCards-1){
      document.dispatchEvent(new CustomEvent('all-cards-finish'));
    }

  }

  hide() {
    this.containerElement.classList.add('inactive');
  }
  
  _onOneCardFinish(event){
    this.currentCard++;
    if(this.currentCard < this.totalCards){
      this.show();
    }

  }

  _onContinue(){
    this.show();
  }

  _onCardRight(event){
    this.numRight = this.numRight+1;
  }

  _onCardWrong(event){
    this.numWrong = this.numWrong + 1;
  }
}
