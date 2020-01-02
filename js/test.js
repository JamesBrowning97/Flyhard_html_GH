var el = document.querySelector(".rows"); //we are here storing all the rows into a var
 var height = el.offsetHeight;// we calculate here the height of rows, whiich shuld be 100vh but of course changes when we resize, and we will have the value in px, to use in the function later on.
var scroll = document.documentElement.scrollTop;

var wrapper = document.getElementById("wrapper");

var rowTwo = document.getElementById("row2");

var rowThree = document.getElementById("row3");

var rowFour = document.getElementById("row4");


var titleTwo = document.getElementById("row2-title");

var titleThree = document.getElementById("row3-title");

var titleFour = document.getElementById("row4-title");

window.addEventListener('scroll', rowScroll);


function rowScroll() {
  var ypos = window.pageYOffset;
  if (ypos >= height) {
    titleTwo.classList.add("slide-titles");//entrance animation when we scroll 100vh
  } else if (ypos < height / 2) {//animation disappears when we scroll up 50vh, whichi is half of 100vh
  titleTwo.classList.remove("slide-titles");
  } 
  //these other 2 instances only change the height value, of course because the more we scroll down in the page, the bigger the height value should be in order to trigger the animations
  if (ypos >= height *2) {
    titleThree.classList.add("slide-titles");
    } else if (ypos < height * 1.5) {
  titleThree.classList.remove("slide-titles");
  }
   if (ypos >= height *3) {
    titleFour.classList.add("slide-titles");
    } else if (ypos < height * 2.5) {
  titleFour.classList.remove("slide-titles");
  }
}