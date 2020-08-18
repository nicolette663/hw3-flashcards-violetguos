// TODO(you): Modify the class in whatever ways necessary to implement
// the flashcard app behavior.
//
// You may need to do things such as:
// - Changing the constructor parameters
// - Adding methods
// - Adding additional fields

class ResultsScreen {
  constructor(containerElement) {
    this.containerElement = containerElement;
    this.numRight = 0;
    this.numWrong = 0;
    this._onCardRight = this._onCardRight.bind(this);
    this._onCardWrong = this._onCardWrong.bind(this);

    document.addEventListener('card-right', this._onCardRight);
    document.addEventListener('card-wrong', this._onCardWrong);
  }

  show(numberCorrect, numberWrong) {
    this.containerElement.classList.remove('inactive');
    console.log(this.containerElement);
  }

  hide() {
    this.containerElement.classList.add('inactive');
  }


  _onCardRight(){
    this.numRight++;
  }

  _onCardWrong(){
    this.numWrong++;
  }

}
