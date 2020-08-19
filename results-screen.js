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

  show() {
    this.containerElement.classList.remove('inactive');
    if (this.numRight > 0)
      this.numRight++;
    if (this.numWrong > 0)
      this.numWrong++;
    const score = this.numRight * 100;
    const scoreSpan = this.containerElement.querySelector(".percent");
    scoreSpan.textContent = score.toString();
    const rightSpan =  this.containerElement.querySelector(".correct");
    const wrongSpan = this.containerElement.querySelector(".incorrect");
    rightSpan.textContent = this.numRight.toString();
    wrongSpan.textContent = this.numWrong.toString();

    if(score < 100){
      const button = this.containerElement.querySelector(".continue");
      console.log("button");
      button.textContent = "Continue";

    }
    console.log(rightSpan);
  }

  hide() {
    this.containerElement.classList.add('inactive');
    
  }


  _onCardRight(event){
    this.numRight = this.numRight+1;
  }

  _onCardWrong(event){
    this.numWrong = this.numWrong + 1;
  }

}
