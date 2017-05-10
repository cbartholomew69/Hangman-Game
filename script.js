window.onload = function () {

  var words = ['javasript', 'angular', 'syntax', 'ruby', 'jquery', 'nodes'];

}

var word="";

var answerArray = [];

function start() {

  words = word[Math.floor(Math.random() * word.length)];
  answerArray = [];
  for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }
  document.getElementById('answer').html() = answerArray.join(" ");
  document.getElementById('message').html() = 'Enter a letter or click quit'
}
start();

function guessOne () {
  var guess = document.getElementById('guess').value;
  var showMessage = "";
    if (guess.length !== 1) {
      showMessage = "Enter a single letter!"
    }
}
