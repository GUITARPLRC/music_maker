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
    audio[0].play();
  }
  function playOrange(){
    audio[1].play();
  }
  function playYellow(){
    audio[2].play();
  }
  function playGreen(){
    audio[3].play();
  }
  function playBlue(){
    audio[4].play();
  }
  function playViolet(){
    audio[5].play();
  }
  function playPink(){
    audio[6].play();
  }
  
  
})();