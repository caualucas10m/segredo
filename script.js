// O código JavaScript
var button = document.querySelectorAll('button')[0];
var body = document.querySelectorAll('body')[0];

button.addEventListener('click', activateLove, false);
body.addEventListener('animationend', resetLoveEffect, false);

function activateLove() {
  body.classList.add('love');
}

function resetLoveEffect() {
  body.classList.remove('love');
}
