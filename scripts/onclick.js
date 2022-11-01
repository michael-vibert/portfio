// Get the button, and when the user clicks on it, execute myFunction
document.getElementById("toggle").onclick = function() {myFunction()};

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function myFunction() {o
  document.getElementById("toggle").classList.toggle("overlay");
}

// https://www.w3schools.com/JSREF/tryit.asp?filename=tryjsref_onclick_dropdown