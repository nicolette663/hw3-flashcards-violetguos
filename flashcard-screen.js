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
    document.addEventListener('one-card-finish', this._onOneCardFinish);

    this.totalCards =  Object.keys( FLASHCARD_DECKS[this.topic]['words']).length;
    console.log("this.totalCards", this.totalCards);
  }

  show() {
    this.containerElement.classList.remove('inactive');
    const flashcardContainer = document.querySelector('#flashcard-container');
    flashcardContainer.innerHTML = '';
    // all the keys
    const keys = Object.keys(FLASHCARD_DECKS[this.topic]['words']);

    const card = new Flashcard(flashcardContainer, 
      keys[this.currentCard],
      FLASHCARD_DECKS[this.topic]['words'][keys[this.currentCard]]
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

}
