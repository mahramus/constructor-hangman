var Letter = function(character) {
    this.character = character;
    this.guessed = false;

    this.placeholder = function () {
        // underscore or the correctly guessed letter
        if (character === " ") {
            //display guess;
            this.guessed = true;
            return " ";
        } if (this.guessed === false) {
            return " _ ";
        } else {
            return character;
        }
        //do nothing; tell them they're wrong
    };
    // this.charCheck = function () {
    //     // checks guess against placeholder
    // }
  
};
  
module.exports = Letter;