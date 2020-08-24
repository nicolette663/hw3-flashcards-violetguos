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

    this._onImperfectScore = this._onImperfectScore.bind(this);
    this._onPerfectScore = this._onPerfectScore.bind(this);

  }

  show(numRight, numWrong) {
    this.numRight = numRight;
    this.numWrong = numWrong;
    this.containerElement.classList.remove('inactive');

    const score = Math.round(this.numRight / (this.numRight + this.numWrong) * 100);
    const scoreSpan = this.containerElement.querySelector(".percent");
    scoreSpan.textContent = score.toString();
    const rightSpan =  this.containerElement.querySelector(".correct");
    const wrongSpan = this.containerElement.querySelector(".incorrect");
    rightSpan.textContent = this.numRight.toString();
    wrongSpan.textContent = this.numWrong.toString();

    if(score < 100){
      const button = this.containerElement.querySelector(".continue");
      console.log("button", button);
      button.textContent = "Continue";
      button.addEventListener("click", this._onImperfectScore ); 

    }
    else{
      const button = this.containerElement.querySelector(".continue");
      button.textContent = "Start Over";
      button.addEventListener("click", this._onPerfectScore ); 

    }

  }

  hide() {
    this.containerElement.classList.add('inactive');
    
  }

  _onImperfectScore(events){
    document.dispatchEvent(new CustomEvent('continue-wrong-cards'));
    this.hide();
  }

  _onPerfectScore(event){
    document.dispatchEvent(new CustomEvent('restart'));
    this.hide();
  }

}
