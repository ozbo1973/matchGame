$(document).ready(function(){
  MatchGame.renderCards(MatchGame.generateCardValues(),$('#game'));
}) // ./ready


var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {
//create array of numbers 1 to 8 twice
  var orderedNumber = [];
  for (var i = 1; i < 9; i++) {
  //return the Array
    orderedNumber.push(i,i);
    console.log(orderedNumber);
  };// ./for
//create the random generated array that includes
  var randomNumber=[];
    while (orderedNumber.length) {
      var randomIndex = Math.floor(Math.random() * orderedNumber.length);
      randomNumber.push(orderedNumber[randomIndex]);
      orderedNumber.splice(randomIndex,1);
    }// ./while
    return randomNumber;
    console.log(randomNumber);
}; // ./fx

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {
  var hslValues = [25,55,90,160,220,265,310,360];
//empty the card values
  $game.empty();
//generate card values and styles
  $.each(cardValues,function(i,v){
    var $newCard= $('<div class="col-xs-3 card"></div>');
    $newCard.data("value",v);
    $newCard.data("flipped",false);
    $newCard.data('color',hslValues[v-1] );
    $game.append($newCard);
    console.log($newCard);
  })// ./ each

//add the card objects to the game object

};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};
