(function(){
  
  var red = document.getElementById("red"),
      orange = document.getElementById("orange"),
      yellow = document.getElementById("yellow"),
      green = document.getElementById("green"),
      blue = document.getElementById("blue"),
      violet = document.getElementById("violet"),
      pink = document.getElementById("pink"),
      audio = document.getElementsByTagName("audio");
      
  red.addEventListener("mouseenter", playRed, false);
  orange.addEventListener("mouseenter", playOrange, false);
  yellow.addEventListener("mouseenter", playYellow, false);
  green.addEventListener("mouseenter", playGreen, false);
  blue.addEventListener("mouseenter", playBlue, false);
  violet.addEventListener("mouseenter", playViolet, false);
  pink.addEventListener("mouseenter", playPink, false);
  
  function playRed(){
    audioStop();
    audio[0].play();
  }
  function playOrange(){
    audioStop();
    audio[1].play();
  }
  function playYellow(){
    audioStop();
    audio[2].play();
  }
  function playGreen(){
    audioStop();
    audio[3].play();
  }
  function playBlue(){
    audioStop();
    audio[4].play();
  }
  function playViolet(){
    audioStop();
    audio[5].play();
  }
  function playPink(){
    audioStop();
    audio[6].play();
  }
  
  function audioStop() {
    for (var i = 0, l = audio.length; i < l; i++) {
      audio[i].pause();
      audio[i].currentTime = 0;
    }
  }
  
  document.onkeypress = function note(e) {
    e = e.keyCode;
    if (e === 65 || e === 97) { //a
      violet.classList.remove('light');
      playViolet();
      setTimeout(function() {
        violet.classList.add('light');
      }, 250);
    }
    else if (e === 66 || e === 98) { //b
      pink.classList.remove('light');
      playPink();
      setTimeout(function() {
        pink.classList.add('light');
      }, 250);
    }
    else if (e === 67 || e === 99) { //c
      red.classList.remove('light');
      playRed();
      setTimeout(function() {
        red.classList.add('light');
      }, 250);
    }
    else if (e === 68 || e === 100) { //d
      orange.classList.remove('light');
      playOrange();
      setTimeout(function() {
        orange.classList.add('light');
      }, 250);
    }
    else if(e === 69 || e === 101) { //e
      yellow.classList.remove('light');
      playYellow();
      setTimeout(function() {
        yellow.classList.add('light');
      }, 250);
    }
    else if (e === 70 || e === 102) { //f
      green.classList.remove('light');
      playGreen();
      setTimeout(function() {
        green.classList.add('light');
      }, 250);
    }
    else if (e === 71 || e === 103) { //g
      blue.classList.remove('light');
      playBlue();
      setTimeout(function() {
        blue.classList.add('light');
      }, 250);
    }
  }
  
  
  
  
  
  
  /*
  twinkle, twinkle
  c c g g a a g
  f f e e d d c
  g g f f e e d
  g g f f e e d
  c c g g a a g
  f f e e d d c
  
  barney
  g e g   g e g
  a g f e d e f
  efg c c cccdefg
  g d d f e d c
  
  
  
  
  */
  
})();