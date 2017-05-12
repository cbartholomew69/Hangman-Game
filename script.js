window.onload = function () {

  var words = ['javasript', 'angular', 'syntax', 'ruby', 'jquery', 'nodes'];

  var answerArray = [];

  var randomNumber = Math.floor(Math.random() * words.length);
  var word = words[randomNumber];

  function start() {
    console.log('word : ' + word);

    // word = words[Math.floor(Math.random() * word.length)];

    for (var i = 0; i < word.length; i++) {

      answerArray[i] = "_";

    }

    console.log('answer : ' + answerArray.join(" "));
    document.getElementById('answer').innerHTML = answerArray.join(" ");
    // $('#')
    // $('#answer').innerHTML = answerArray.join(" ");

    // document.getElementById('message').innerHTML = 'Enter a letter or click quit'
  }

  function guessOne () {

    var guess = document.getElementById('guess').value;

    var showMessage = "";

    if (guess.length !== 1) {

      showMessage = "Enter a single letter!";

    }
    else {

      var i = 0;

      for (var i = 0; i < word.length; i++) {

        if (word[i] === guess) {

          answerArray[i] = guess;

          showMessage = "Yay! " + guess + " is part of the answer";
        }
      }
    }
  }

  var remainingLetters = answerArray.length;

  for (i = 0; i < answerArray.length; i++) {

    if (answerArray[i] !== '_') {

      remainingLetters -= 1;
    }
  }

  if (remainingLetters == 0){

    showMessage = "BaJesus, you guessed the word";

    if (showMessage === "") {

      showMessage = "To dog on bad, no " + guess;

      document.getElementById("answer").innerHTML = answerArray.join(" ");

      document.getElementById("guess").value = "";

      document.getElementById("message").innerHTML = showMessage;
    }

  }

  function quit() {

    document.getElementById("message").innerHTML = "The word was "+word;

    for (var j = 0; j < word.length; j++) {

      answerArray[j] = word[j];
    }
    document.getElementById("answer").innerHTML = answerArray.join(" ");
  }

  var startButton = document.getElementById('start');

  startButton.addEventListener('click', start);
}
