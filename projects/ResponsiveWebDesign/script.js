let today = new Date();
let hourNow = today.getHours();
let greeting;

if (hourNow > 18) {
    greeting = 'Good evening, my name is CHIENWIE CLOUVIS SUH. You are welcome to my page.!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon, my name is CHIENWIE CLOUVIS SUH. You are welcome to my page.!';
} else if (hourNow > 0) {
    greeting = 'Good morning, my name is CHIENWIE CLOUVIS SUH. You are welcome to my page.!';
} else {
    greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');



/* Bellow is a practice code 





/* 
  1. Store correct answers
   - When quiz begins, no answers are correct

let correct = 0;

// 2. Store the rank of a player

let rank;

// 3. Select the <main> HTML element

const main = document.querySelector('main');
/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers

   const correctAnswer1 = prompt("How many continent are there on earth?");
   if (correctAnswer1.toUpperCase() === 'SEVEN') {
     correct += 1;
   }
  
   const correctAnswer2 = prompt("How many States are there in USA?");
    if (correctAnswer2.toUpperCase() === 'FIFTY' ) {
       correct += 1;
    }

   const correctAnswer3 = prompt("How many Season are there in a year?");
    if (correctAnswer3.toUpperCase() === 'FOUR') {
       correct += 1;
    }

   const correctAnswer4 = prompt("What is the capital of USA?");
    if (correctAnswer4.toUpperCase() === 'WASHINGTON') {
       correct += 1;
    }

   const correctAnswer5 = prompt("which is the most populated country on earth?");
    if (correctAnswer5.toUpperCase() === 'CHINA') {
      correct += 1;
    }*/


/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown

if ( correct === 5) {
  rank = 'Gold';
} else if (correct >= 3) {
  rank = 'Silver';
} else if (correct >= 1) {
  rank = 'Bronze';
} else {
  rank = 'none :(';


// 6. Output results to the <main> element
main.innerHTML = `
  <h2> You got ${correct} out of 5 questions correct.</h2>
  <p> Crown earned: <strong>${rank}</strong></p>
`;
}*/

 
 