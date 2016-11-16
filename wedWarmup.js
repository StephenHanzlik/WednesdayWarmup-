'use strict';


$(window).load(function(){

// whatever the button is called
// var stopButton = document.querySelector('#stopButton');
var $button = $('#button');

  $button.on('click', function() {
    var $userInputBox = $('#input-box');
    var compNum = Math.floor((Math.random() * 100) + 1);

    var guess = $userInputBox.val();
    if (guess >= 1 || guess <= 100 ) {
      if (guess > compNum) {
        event.preventDefault();
        Materialize.toast('your guess is greater than the generated number', 4000);
        console.log('your guess is greater than the generated number');
      } else if (guess < compNum) {
        event.preventDefault();
        Materialize.toast('your guess is less than the generated number', 4000);
        console.log('your guess is less than the generated number');
      } else if (guess == compNum) {
        event.preventDefault();
        Materialize.toast('your guess is the generated number, you win', 4000);
        console.log('your guess is the generated number, you win');
      }
    } else {
      event.preventDefault();
      Materialize.toast('input incorrect', 4000);
      console.log('input incorrect');
    }
  });
});
