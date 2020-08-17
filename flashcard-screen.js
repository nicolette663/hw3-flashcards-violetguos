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
    this._onCardFinish = this._onCardFinish.bind(this);
    document.addEventListener('card-finish', this._onCardFinish);
  }

  show() {
    this.containerElement.classList.remove('inactive');
    const flashcardContainer = document.querySelector('#flashcard-container');
    
    // all the keys
    const keys = Object.keys(FLASHCARD_DECKS[this.topic]['words']);

    // TODO: choose a random key??

    const card = new Flashcard(flashcardContainer, 
      keys[this.currentCard],
      FLASHCARD_DECKS[this.topic]['words'][keys[this.currentCard]]
    );
    
    
  }

  hide() {
    this.containerElement.classList.add('inactive');
  }
  
  _onCardFinish(event){
    //this.currentCard++;
    this.show();
  }

}
