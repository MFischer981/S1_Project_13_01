"use strict";
/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Case Problem 1
   Author: Micah Fischer
   Date:   3-14-18
   Filename: bw_review.js
   Functions List:
   init()
      Initializes the contents of the web page and sets up the
      event handlers.
   lightStars(e)
      Function that colors the stars representing the user rating
      for the book.
   turnOffStars(e)
      Function that restores the stars to empty colors, removing
      the user rating for the book.
   updateCount()
      Updates the count of characters in the wordCountBox
      element.
   countCharacters(textStr)
      Returns the number of a non-whitespace characters
      within textStr
*/
// Loads the init function when the on browser window load.
window.onload = init();
// This function creates an array of the stars and adds event listeners for each of the stars. It also triggers the star light function and update count function as the user initiates a key up. Initializes the contents of the web page and sets up the event handlers.
function init() {
    var stars = document.querySelectorAll("span#stars img");

    for (var i = 0; i < stars.length; i++) {
        stars[i].style.cursor = "pointer";
        stars[i].addEventListener("mouseenter", lightStars);
    }
    document.getElementById("comment").addEventListener("keyup", updateCount);
}
// This event changes the star color when the star is hovered and clicked on. If the mouse  is clicked the mouse leave event listener is moved until the stars are clicked again. Function that colors the stars representing the user rating for the book.
function lightStars() {
    var starNumber = event.target.alt;
    var stars = document.querySelectorAll("span#stars img");
    for (var i = 0; i < starNumber; i++) {
        stars[i].src = "bw_star2.png";
    }
    for (var j = starNumber; j < 5; j++) {
        stars[j].src = "bw_star.png"
    }
    document.getElementById("rating").value = starNumber + " stars";
    event.target.addEventListener("mouseleave", turnOffStars);
    event.target.addEventListener("click",
        function () {
            event.target.removeEventListener("mouseleave", turnOffStars);
        }
    );
}
// The turnOffStars function restores the stars to empty colors, removing the user rating for the book.
function turnOffStars() {
    var stars = document.querySelectorAll("span#stars img");
    for (var i = 0; i < stars.length; i++) {
        stars[i].src = "bw_star.png";
    }
    document.getElementById("rating").value = "";
}
// This function updates the word count for the textarea.An if statement tests wether or not the word count has exceeded 1000, and updates the style based on the if statement. Returns the number of a non-whitespace characters within textStr.
function updateCount() {
    var commentText = document.getElementById("comment").value;
    var charCount = countCharacters(commentText);
    var wordCountBox = document.getElementById("wordCount");
    wordCountBox.value = charCount + "/1000";
    if (charCount > 1000) {
        wordCountBox.style.backgroundColor = "red";
        wordCountBox.style.color = "white";
    } else {
        wordCountBox.style.backgroundColor = "white";
        wordCountBox.style.color = "black";
    }

}

/*=================================================================*/
function countCharacters(textStr) {
    var commentregx = /\s/g;
    var chars = textStr.replace(commentregx, "");
    return chars.length;
}