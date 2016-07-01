(function(){
  
  var red = document.getElementById("red"),
      orange = document.getElementById("orange"),
      yellow = document.getElementById("yellow"),
      green = document.getElementById("green"),
      blue = document.getElementById("blue"),
      violet = document.getElementById("violet"),
      pink = document.getElementById("pink"),
      audio = document.getElementsByTagName("audio"),
      bTwinkle = document.getElementById("twinkle"),
      bBarney = document.getElementById("barney");
      
  red.addEventListener("mouseenter", playRed, false);
  orange.addEventListener("mouseenter", playOrange, false);
  yellow.addEventListener("mouseenter", playYellow, false);
  green.addEventListener("mouseenter", playGreen, false);
  blue.addEventListener("mouseenter", playBlue, false);
  violet.addEventListener("mouseenter", playViolet, false);
  pink.addEventListener("mouseenter", playPink, false);
  bTwinkle.addEventListener("click", twinkle, false);
  bBarney.addEventListener("click", barney, false);
  
  function playRed(){ //C
    audioStop();
    audio[0].play();
  }
  function playOrange(){ //D
    audioStop();
    audio[1].play();
  }
  function playYellow(){ //E
    audioStop();
    audio[2].play();
  }
  function playGreen(){ //F
    audioStop();
    audio[3].play();
  }
  function playBlue(){ //G
    audioStop();
    audio[4].play();
  }
  function playViolet(){ //A
    audioStop();
    audio[5].play();
  }
  function playPink(){ //B
    audioStop();
    audio[6].play();
  }
  
  function audioStop() {
    for (var i = 0, l = audio.length; i < l; i++) {
      audio[i].pause();
      audio[i].currentTime = 0;
    }
  }
  
  document.onkeypress = function input(e) {
    e = e.keyCode;
    note(e);
  }
  
  function note(k) {
    
    switch (k) {
      case 65:
      case 97:
        violet.classList.remove('light');
        playViolet();
        setTimeout(function() {
          violet.classList.add('light');
        }, 150);
      break;
      
      case 66:
      case 98:
        pink.classList.remove('light');
        playPink();
        setTimeout(function() {
          pink.classList.add('light');
        }, 150);
      break;
      
      case 67:
      case 99:
        red.classList.remove('light');
        playRed();
        setTimeout(function() {
          red.classList.add('light');
        }, 150);
      break;
      
      case 68:
      case 100:
        orange.classList.remove('light');
        playOrange();
        setTimeout(function() {
          orange.classList.add('light');
        }, 150);
      break;
      
      case 69:
      case 101:
        yellow.classList.remove('light');
        playYellow();
        setTimeout(function() {
          yellow.classList.add('light');
        }, 150);
      break;
      
      case 70:
      case 102:
        green.classList.remove('light');
        playGreen();
        setTimeout(function() {
          green.classList.add('light');
        }, 150);
      break;
      
      case 71:
      case 103:
        blue.classList.remove('light');
        playBlue();
        setTimeout(function() {
          blue.classList.add('light');
        }, 150);
      break;
      default:
      //pause
      break;
    }
  }
  
  function twinkle() {
    note(67);
    note(67);
    note(71);
    note(71);
    note(65);
    note(65);
    note(71);
    note();
  }
  
  function barney() {
    note(71);
    note(69);
    note(71);
    note();
    note(71);
    note(69);
    note(71);
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