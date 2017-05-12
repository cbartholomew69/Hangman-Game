window.onload = function () {

  var words = ['javasript', 'angular', 'syntax', 'ruby', 'jquery', 'nodes'];

  var answerArray = [];

  var randomNumber = 0;

  var word = '';

  var counter = 7;

  function start() {


    randomNumber = Math.floor(Math.random() * words.length);

    word = words[randomNumber];

    console.log('word : ' + word);

    for (var i = 0; i < word.length; i++) {

      answerArray[i] = "_";

    }

    console.log('answer : ' + answerArray.join(" "));
    document.getElementById('answer').innerHTML = answerArray.join(" ");
    // document.getElementById('directions').setAttribute('class', 'hidden');
    document.getElementById('letter').value = '';
  }

  function guessOne () {

    var guess = document.getElementById('letter').value;
    console.log(word.indexOf(guess));

    if (word.indexOf(guess) > -1) {
    // if statment that checks word.indexOf(guess)
      for (var i = 0; i < word.length; i++) {

        if (word[i] === guess) {

          answerArray[i] = guess;

          console.log(answerArray);

          document.getElementById('answer').innerHTML = answerArray.join(" ");

          alert("Yay! you guessed a letter ");
        }
        else {
            console.log("I am pissed you didn't get it");
        }
      }
    }
    else {
      counter--;

      document.getElementById('guessesLeft').innerHTML = "You have " + counter + " Guesses Left";

      console.log(counter);
    }
    // else lowers your counter; guess is wrong
    document.getElementById('letter').value = '';
  }


  function quit() {

    document.getElementById("answer").innerHTML = "The word was " + word;

  }

  var startButton = document.getElementById('start');

  startButton.addEventListener('click', start);

  var resetButton = document.getElementById('reset');

  resetButton.addEventListener('click', start);

  var quitButton = document.getElementById('quit');

  quitButton.addEventListener('click', quit);

  var letterButton = document.getElementById('guessedLetter');

  letterButton.addEventListener('click', guessOne);


}

// var remainingLetters = answerArray.length;

//   for (i = 0; i < answerArray.length; i++) {

//     if (answerArray[i] !== '_') {

//       remainingLetters -= 1;
//     }
//   }

//   if (remainingLetters == 0){

//     showMessage = "BaJesus, you guessed the word";

//     if (showMessage === "") {

//       showMessage = "To dog on bad, no " + guess;

//       document.getElementById("answer").innerHTML = answerArray.join(" ");

//       document.getElementById("guess").value = "";

//       document.getElementById("message").innerHTML = showMessage;
//     }

//   }
