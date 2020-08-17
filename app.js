// TODO(you): Modify the class in whatever ways necessary to implement
// the flashcard app behavior.
//
// You may need to do things such as:
// - Changing the constructor parameters
// - Changing the code in the constructor
// - Adding methods
// - Adding additional fields

class App {
  constructor() {
    const menuElement = document.querySelector('#menu');
    this.menu = new MenuScreen(menuElement);

    const mainElement = document.querySelector('#main');
    this.flashcards_css = new FlashcardScreen(mainElement, 0);
    this.flashcards_basic = new FlashcardScreen(mainElement, 1);

    const resultElement = document.querySelector('#results');
    this.results = new ResultsScreen(resultElement);

    this._onSelectMenuCSS = this._onSelectMenuCSS.bind(this);
    this._onSelectMenuBasic = this._onSelectMenuBasic.bind(this);

    document.addEventListener('css-menu-selected', this._onSelectMenuCSS);
    document.addEventListener('basic-menu-selected', this._onSelectMenuBasic);



    // Uncomment this pair of lines to see the "flashcard" screen:
    // this.menu.hide();
    // this.flashcards.show();

    // Uncomment this pair of lines to see the "results" screen:
    // this.menu.hide();
    // this.results.show();
  }

  _onSelectMenuCSS(){
    this.flashcards_css.show();
  }

  _onSelectMenuBasic(){
    this.flashcards_basic.show();
  }

}
