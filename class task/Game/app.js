// chapter 48 : Events : fields

// chapter 49 : Reading field values:

// function abc() {
//   var userName = document.getElementById("username").value;
//   console.log(userName);
// }

// chapter 50 : Setting field values

// var user = "faraz";
// function abc() {
//     var userName = document.getElementById("username").value = user;
//     console.log(userName);
//   }

// ------ game logics -----

var forward = 0;
function abc() {

  console.log(event.keyCode);

  var character = document.getElementById("character");
  if(event.keyCode === 37){
    forward = forward + 10;
    character.style.left = forward + "px"
  }
  if(event.keyCode === 38){
    forward = forward - 10;
    character.style.left = forward + "px"
  }
  if(event.keyCode === 39){
    character.style.width = "180px"
    character.style.height = "375px"
    character.src = "images/stand and dance.gif"
    
  }
  if(event.keyCode === 40){
    character.style.width = "450px"
    character.style.height = "350px"
    character.src = "images/leg.gif"
    
  }
}

window.onkeydown = abc;