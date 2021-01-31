function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
var target = document.getElementById('target');
var logo = document.getElementById ('logo');
logo.addEventListener('mouseover', function() {
  target.style.backgroundColor = 'rgb('+getRandomInt(0,255)+', '+getRandomInt(0,255)+', '+getRandomInt(0,255)+')';
  logo.style.backgroundColor = target.style.backgroundColor;
});
