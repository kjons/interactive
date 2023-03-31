// when a key is pressed, do this function...
document.body.onkeydown = function(keypress_event){

  // figure out what key was pressed, store that in a variable key
  var key = keypress_event.key;

  // go find the element in HTML with id of key_display, and change its content
  document.getElementById("key_display").innerHTML = key;

  // create a new element
  var new_element = document.createElement("h1");

  // give the new element some content
  new_element.innerHTML = key;

  // give the new element a class (class is defined in my css file)
  new_element.classList.add("xl-type");

  // add the new element to the body
  document.body.appendChild(new_element);

  if (key == "a") {
    document.body.style.backgroundColor = "lightsteelblue";
  }

  else if (key == "b") {
    document.body.style.backgroundColor = "lightsalmon";
  }

  else if (key == "c") {
    document.body.style.backgroundColor = "tomato";
  }
    else if (key == "d") {
    document.body.style.backgroundColor = "violet";
  }

    else if (key == "e") {
    document.body.style.backgroundColor = "springgreen";
  }

  else if (key == "f") {
    document.body.style.backgroundColor = "slategray";
  }
    else if (key == "g") {
    document.body.style.backgroundColor = "mediumpurple";
  }
    else if (key == "h") {
    document.body.style.backgroundColor = "lavender";
  }
   else if (key == "i") {
    document.body.style.backgroundColor = "lightcyan";
  }
 else if (key == "j") {
    document.body.style.backgroundColor = "navy";
  }
   else if (key == "k") {
    document.body.style.backgroundColor = "gold";
  }
   else if (key == "l") {
    document.body.style.backgroundColor = "lemonchiffon";
  }
   else if (key == "m") {
    document.body.style.backgroundColor = "darkred";
  }
   else if (key == "n") {
    document.body.style.backgroundColor = "coral";
  }
   else if (key == "o") {
    document.body.style.backgroundColor = "cornsilk";
  }
   else if (key == "p") {
    document.body.style.backgroundColor = "indianred";
  }
   else if (key == "q") {
    document.body.style.backgroundColor = "thistle";
  }
   else if (key == "r") {
    document.body.style.backgroundColor = "orangered";
  }
   else if (key == "s") {
    document.body.style.backgroundColor = "mistyrose";
  }
   else if (key == "t") {
    document.body.style.backgroundColor = "moccasin";
  }
     else if (key == "u") {
    document.body.style.backgroundColor = "darkslateblue";
  }
     else if (key == "v") {
    document.body.style.backgroundColor = "orchid";
  }
     else if (key == "w") {
    document.body.style.backgroundColor = "orange";
  }
     else if (key == "x") {
    document.body.style.backgroundColor = "silver";
  }
     else if (key == "y") {
    document.body.style.backgroundColor = "skyblue";
  }
     else if (key == "z") {
    document.body.style.backgroundColor = "chartreuse";
  }
    else {
    document.body.style.backgroundColor = "gray";
  }
};
