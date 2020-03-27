/*jslint browser: true, indent: 3 */

// CS 3312, spring 2020
// Studio 7
// YOUR NAMES: 

// All the code below will be run once the page content finishes loading.
document.addEventListener('DOMContentLoaded', function () {
   'use strict';

   // Do things when the "Calculate it" button is clicked.
   document.querySelector('#calculate-fibonacci').addEventListener('click', function () {
      var fibonacci; // Do not declare more variables here.

      // WRITE YOUR fibonacci FUNCTION HERE

      (function () {
         var whichFibonacciNumber;
         // Get the user's number.
         whichFibonacciNumber = parseInt(document.querySelector('#fibonacci-input').value, 10);
         // Use the fibonacci function to calculate the output.
         document.querySelector('#which-fibonacci-number').textContent = whichFibonacciNumber;
         document.querySelector('#fibonacci-number').textContent = fibonacci(whichFibonacciNumber);
      }());
   }, false);

   (function () {
      var dieElements; // Do not declare more variables here.

      // WRITE CODE HERE TO MAKE THE #dice ELEMENT WORK

   }());

   (function () {
      var cardElements, cardValues; // Do not declare more variables here.

      // WRITE CODE HERE TO MAKE THE #cards ELEMENT WORK

   }());

   (function () {
      var nextToMove, ticTacToeElements, ticTacToeValues; // Do not declare more variables here.

      // WRITE CODE HERE TO MAKE THE #tic-tac-toe ELEMENT WORK

   }());

}, false);
