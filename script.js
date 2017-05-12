window.onload = function () {

  var words = ['javasript', 'angular', 'syntax', 'ruby', 'jquery', 'nodes'];

  var answerArray = [];

  var randomNumber = 0;

  var word = '';

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
  }

  function guessOne () {

    var guess = document.getElementById('letter').value;
    //console.log(guess);



      for (var i = 0; i < word.length; i++) {

        if (word[i] === guess) {

          answerArray[i] = guess;
          console.log(answerArray);
          document.getElementById('answer').innerHTML = answerArray.join(" ");
          alert("Yay! you guessed a letter ");
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
