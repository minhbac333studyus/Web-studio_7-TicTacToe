/*jslint browser: true, indent: 3 */

// CS 3312, spring 2020
// Studio 7
// YOUR NAMES:Anh Minh Le

// All the code below will be run once the page content finishes loading.
document.addEventListener('DOMContentLoaded', function () {
   'use strict';

   // Do things when the "Calculate it" button is clicked.
   document.querySelector('#calculate-fibonacci').addEventListener('click', function () {
      var fibonacci; // Do not declare more variables here.
      // WRITE YOUR fibonacci FUNCTION HERE

      fibonacci = (function () {
         var fibonacciResults;
         fibonacciResults = [0,1];
         // Initialize the array so that fibonacciResults(0) is 0, fibonacciResults(1) = 1.
         return function f(n) {
            if (Number.isFinite(n) && n >= 0) {
               var i,ans;
               // Make sure that n is an integer.
               n = Math.round(n);
               if ( n === 0) {
                  return 0;
               } else if (n === 1) {
                  return 1;
               } else {
                  for (i = 2; i <= n; i += 1) {
                     // . . . calculate the new result recursively and save it in the array.

                     ans = fibonacciResults[0] + fibonacciResults[1];
                     fibonacciResults[0] = fibonacciResults[1];
                     fibonacciResults[1] =  ans;
                  }
                  return ans;
               }
            }
            // If the input was bad, return the value 0
            return 0;
         };
      }());


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
      // Get an array of all div elements inside the #dice element.
      dieElements = Array.from(document.querySelectorAll('#dice div'));
      dieElements.forEach(function (dieElement, whichDie) {
         // Inside this function, dieElement is the current element and whichDie is its index.

         // Set the value of the current die when the page loads.
         dieElement.textContent = whichDie + 1;

         // Create an event handler that rerolls the die randomly whenever it is clicked.
         dieElement.addEventListener('click', function () {
            //create  a new subarray then make a loop to change value of it
            dieElements.slice(0,whichDie).forEach(function (dieElement, whichDie) {
            dieElement.textContent = Math.floor(Math.random() * 6) + 1;});
         }, false);
      });

   }());

   (function () {
      var cardElements, cardValues; // Do not declare more variables here.
   //   Get an array of all div elements inside the #cards element.  Put the array in the cardElements vari
      cardElements = Array.from(document.querySelectorAll('#cards div'));
      cardValues = [];
      cardElements.forEach(function (cardElement, whichCard) {
         // Inside this function, cardElement is the current element and whichCard is its index.
         var i;
         i = Math.floor(Math.random() * 99) + 1;
         cardElement.textContent = i;
         cardValues.push(i);
         cardElement.addEventListener('click',function () {
            //leaving the other cards in the same order, and outputs all the new card values to the card divs
            var tempCard = cardValues[whichCard];
            cardValues = cardValues.slice(0,whichCard).concat(cardValues.slice(whichCard+1));
            //Move the clickedCard to the end of array
            cardValues.push(tempCard);
            cardElements.forEach(function (cardElement, whichCard) {
               cardElement.textContent = cardValues[whichCard];
            },false);
         },false);
      });
      document.querySelector('#sort-cards').addEventListener('click', function() {
         //Create an event handler that sorts the cards numerically (smallest on the left, largest on the right)
         cardValues.sort();
         //Sort the value in the card Array

         //Show it on the website
         cardElements.forEach(function (cardElement, whichCard) {
            cardElement.textContent = cardValues[whichCard];
         },false);
      },false);

      document.querySelector('#reverse-cards').addEventListener('click', function() {
         cardValues.reverse();
         //Reverse the value in the card Array

         //Show it on the website
         cardElements.forEach(function (cardElement, whichCard) {
            cardElement.textContent = cardValues[whichCard];
         },false);
      },false);


      // WRITE CODE HERE TO MAKE THE #cards ELEMENT WORK

   }());

   (function () {
      var nextToMove, ticTacToeElements, ticTacToeValues; // Do not declare more variables here.
      nextToMove = 'X'; //Player move first
      ticTacToeValues = []; //2 dimension array to store the move in gameboard
      ticTacToeElements = [];
            // WRITE CODE HERE TO MAKE THE #tic-tac-toe ELEMENT WORK
      //Use the value of the nextToMove variable to output a status message like X moves next. to the #tic-tac-toe-status element.
      if (nextToMove === 'X') {
         document.querySelector('#tic-tac-toe-status').textContent = 'X moves next.';
      }
      Array.from(document.querySelectorAll('#tic-tac-toe tr')).forEach(function(ticElement, whichTic) {
      //Get an array of all tr elements inside the #tic-tac-toe element and use a
      // forEach loop to iterate through each of them one by one.  For each row:

         var rowElements = Array.from(document.querySelectorAll('td'));
         // Get an array of all td elements inside the current row.  Put the array in a rowElements variable
         var rowValues = [];
         //Then, for each element in the rowElements array, add an empty string to the rowValues array.
         rowElements.forEach(function () { // length = 3 because td has 3 time in a tr
            // Build an array of 0 values the same size as the current row.
            rowValues.push(''); //['','','']
         });
         //-> after all we gonna have 3x3 square net  ['','','']
         //                                           ['','','']
         //                                           ['','','']
         // Build the arrays of elements and values row by row.
         ticTacToeValues.push(rowValues);
         ticTacToeElements.push(rowElements);

      }) ;
      // Go through each td element in the matrix, row by row.
      ticTacToeElements.forEach(function(row, whichRow) {
         row.forEach(function(tdSquareElement,whichColumn) {
         //// Inside this function, we have a td element and we know which row and which column it's in.
         ////// Output the initial value to the element.
            //                                           ['','','']
            //                                           ['','','']
            //                                           ['','','']
            tdSquareElement.textContent =  ticTacToeValues[whichRow][whichColumn];
            //Now game on - click and update status of Player
            tdSquareElement.addEventListener('click',function () {
               ticTacToeValues[whichRow][whichColumn] = nextToMove;
               if (tdSquareElement.textContent === '') {

                  tdSquareElement.textContent = ticTacToeValues[whichRow][whichColumn];

                  if (nextToMove === 'X') {
                     nextToMove = 'O';
                     document.querySelector('#tic-tac-toe-status').textContent = 'O moves next.';
                  } else {
                     nextToMove = 'X';
                     document.querySelector('#tic-tac-toe-status').textContent = 'X moves next.';
                  }
               }
            },false);
         });
      });
   }());

}, false);
