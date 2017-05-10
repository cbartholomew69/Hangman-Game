var alphabet = ['javascript', 'angular', 'variables', 'syntax', 'loops' ];

function secretWord () {

  return words[Math.floor(Math.random() * words.length)];
}

var buttons = function () {
  myButtons = document.getElementById('buttons');
  letters = document.createElement('ul');
  for (var i = 0; i < alphabet.length; i++) {
    letters.id = 'alphabet';
    list = document.createElement('li');
    list.id = 'letter';
    list.innerHTML = alphabet[i];
    check();
    myButtons.appendChild(letters);
    letter.appendChild(list);
  }
}
