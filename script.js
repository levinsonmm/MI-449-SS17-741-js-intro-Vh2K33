var tellJoke = function (joke, punchline) {
  alert(joke)
  alert(punchline)
}

var clapSound = document.getElementById("clapSound");
var clapButton = document.getElementById('clap')
clapButton.addEventListener('click', function () {
  clapSound.play()
})
clapButton.addEventListener('mouseenter', function () {
  clapSound.play()
})
var hihatSound = document.getElementById("hihatSound");
var hihatButton = document.getElementById('hihat')
hihatButton.addEventListener('click', function () {
  hihatSound.play()
})
hihatButton.addEventListener('mouseenter', function () {
  hihatSound.play()
})
var kickSound = document.getElementById("kickSound");
var kickButton = document.getElementById('kick')
kickButton.addEventListener('click', function () {
  kickSound.play()
})
kickButton.addEventListener('mouseenter', function () {
  kickSound.play()
})
