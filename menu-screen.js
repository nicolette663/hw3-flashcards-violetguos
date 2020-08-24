// TODO(you): Modify the class in whatever ways necessary to implement
// the flashcard app behavior.
//
// You may need to do things such as:
// - Changing the constructor parameters
// - Adding methods
// - Adding additional fields

class MenuScreen {
  constructor(containerElement) {
    // for loop doesn't work
    this.choiceDivHelper(0);
    this.choiceDivHelper(1);
    this.choiceDivHelper(2);

    this.containerElement = containerElement;
    this.addClickChoice();
  }

  show() {
    this.containerElement.classList.remove('inactive');
  }

  hide() {
    this.containerElement.classList.add('inactive');
    
  }

  choiceDivHelper(i){
    // plug in topics from constant.js
    const h = document.createElement("div")                // Create a <h1> element
    const t = document.createTextNode(FLASHCARD_DECKS[i]['title']);     // Create a text node
    h.appendChild(t);
    const choiceDiv = document.querySelector('#choices');
    choiceDiv.appendChild(h);
  }

  addClickChoice(){
    const choiceDiv = document.querySelector('#choices');
    this._initAnimCSS = this._initAnimCSS.bind(this);
    this._initAnimBasic = this._initAnimBasic.bind(this);
    this._initAnimFood = this._initAnimFood.bind(this);
    choiceDiv.childNodes[0].addEventListener('click', this._initAnimCSS);
    choiceDiv.childNodes[1].addEventListener('click', this._initAnimBasic);
    choiceDiv.childNodes[2].addEventListener('click', this._initAnimFood);

  }

  _initAnimCSS(event){
    this.hide();
    document.dispatchEvent(new CustomEvent('css-menu-selected'));
  }  


  _initAnimBasic(event){
    this.hide();
    document.dispatchEvent(new CustomEvent('basic-menu-selected'));
  }  

  _initAnimFood(event){
    this.hide();
    document.dispatchEvent(new CustomEvent('food-menu-selected'));
  }  

}
