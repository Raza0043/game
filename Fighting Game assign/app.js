var forward1 = 0; // Position for character 1
var forward2 = 0; // Position for character 2


function moveCharacter1(event) {
  var character1 = document.getElementById("character");

  if(event.keyCode === 39) {      // Right arrow for forward
    forward1 += 10;
    character1.style.left = forward1 + "px";
  }
  if(event.keyCode === 37) {      // Left arrow for backward
    forward1 -= 10;
    character1.style.left = forward1 + "px";
  }
  if(event.keyCode === 40) {      // Down arrow for stance change
    character1.style.width = "180px";
    character1.style.height = "375px";
    character1.src = "images/stand and dance.gif";
  }
  if(event.keyCode === 76) {      // "L" key for leg move
    character1.style.width = "360px";
    character1.style.height = "350px";
    character1.src = "images/leg.gif";
  }
}






function moveCharacter2(event) {
  var character2 = document.getElementById("character1");

  if(event.keyCode === 81) {      // "Q" key for forward
    forward2 += 10;
    character2.style.right = forward2 + "px";
  }
  if(event.keyCode === 87) {      // "W" key for backward
    forward2 -= 10;
    character2.style.right= forward2 + "px";
  }
  if(event.keyCode === 84) {      // "T" key for stance change
    character2.style.width = "380px";
    character2.style.height = "660px";
    character2.src = "images/LEG OPP NEW.gif";
  }
  if(event.keyCode === 89) {      // "Y" key for leg move
    character2.style.width = "600px";
    character2.style.height = "350px";
    character2.src = "images/ADVANCE FIRE.gif";
  }

  
}

function handleKeyPress(event) {
  moveCharacter1(event);
  moveCharacter2(event);
}


window.onkeyup = handleKeyPress;
window.onkeydown = handleKeyPress;
