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
    // console.log(orderedNumber);
  };// ./for
//create the random generated array that includes
  var randomNumber=[];
    while (orderedNumber.length) {
      var randomIndex = Math.floor(Math.random() * orderedNumber.length);
      randomNumber.push(orderedNumber[randomIndex]);
      orderedNumber.splice(randomIndex,1);
    }// ./while
    return randomNumber;
    // console.log(randomNumber);
}; // ./fx

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {
  var hslValues = [25,55,90,160,220,265,310,360];
  $game.data('flippedCards', []);
//empty the card values
  $game.empty();
//generate card values and styles
  $.each(cardValues,function(i,v){
    var $newCard= $('<div class="col-xs-3 card"></div>');
    $newCard.data("value",v);
    $newCard.data("flipped",false);
    $newCard.data('color',hslValues[v-1] );
//console.log($newCard.data('color') + " " + $newCard.data('value'));
  //add the card objects to the game object
    $game.append($newCard);
//console.log($newCard);
  })// ./ each

  $('.card').click(function(){
    MatchGame.flipCard($(this),$game);
//console.log($(this));
  })
//console.log($game.data('flippedCards'));
};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {
/* check to see if flipped is true, if false turn card over and reveal number
if true change css back to regular
*/
  var currentFlipped = $game.data('flippedCards')

  if (!$card.data('flipped')) {
      $card.css('background-color', "hsl(" + $card.data("color") + ",85%,65%)");
      $card.text($card.data("value"));
      $card.data("flipped",true);
      currentFlipped.push($card);
      $game.data("flippedCards",currentFlipped);
  } // ./if

//check the cards to see if they are matched and change to matched or flip back over
  setTimeout(function(){
    if(currentFlipped.length===2){
      $.each(currentFlipped,function(index, el) {
        if(currentFlipped[0].data('value')===currentFlipped[1].data('value')) {
          $(this).css('color', 'rgb(204,204,204)').css('background-color', 'rgb(153,153,153)');
        } else {
        //flip cards back over
            $(this).data('flipped', false);
            $(this).css('background-color', 'rgb(32,64,86)');
            $(this).text('');
        }// ./else if
      });// ./each
        currentFlipped=[];
        $game.data("flippedCards",currentFlipped);
     }// ./if
  }, 400);//./timeout
};
