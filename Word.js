var Letter = require("./Letter");




var Word = function() {
    this.newLetter = newLetter;
    this.letters = [];
    this.match = false;

    this.letterGuess = function () {
        for (var i=0; i < this.target.length; i++){
            this.letters.push( new Letter(newLetter[i]));
        }
        // call function on each letter object
    };

    this.newWord = function () {
        this.match = this.letters.every(function(currentLetter){
            return currentLetter.appear;
        });
        return this.found;
        // call guess function on each letter object
    };

    this.verifyLetter = function(guessLet){
        var toReturn = 0;

        for (var i = 0; i < this.lets.length; i++){
            if (this.lets[i].charac == guessLet){
                this.lets[i].appear = true;
                toReturn++;
            }
        }
        return toReturn;
    };

    this.wordRender = function() {
        var string = " ";
        for (var i=0; i < this.lets.length; i++){
            string += this.lets[i].letterRender();
        }
        return string;
    };


}


module.exports = Word;