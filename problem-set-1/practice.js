//  Multiplication

// Write a function to find the product (multiplication) of two given numbers only using addition. For example, `multiple(2, 5)` should result in 10.

function multiple(a, b) {
  console.log(a * b);
}

// ## Modulo

// Write a function that calculates the modulo (remainder - usually `%`) of a number divided by another number without using your language's modulo operator itself. For example, `mod(137, 10)` should result in 7 and `mod(15, 4)` should result in 1.


function mod(a, b) {
  console.log(a % b);
}

// ## Sum

// Write a program to calculate the sum of the digits of the provided number using a loop. For example, `sumOfDigits(25)` should result in 7 and `sumOfDigits(624)` should result in 12.

function sumOfDigits(num) {
  let sum = 0;
  while (num) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  console.log(sum);
}

// ## Divisibility

// Write a program to find those numbers which are divisible by 7 and of 5, between 1500 and 2700 inclusive.

// (challenge) Make this program generic to handle any amount of numbers to be passed in instead of just 7 and 5.


function divisibility(a, b, start, end) {
  for (let i = start; i <= end; i++) {
    if (i % a === 0 && i % b === 0) {
      console.log(i);
    }
  }
}