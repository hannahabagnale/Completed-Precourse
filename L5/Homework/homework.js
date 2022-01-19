// Do not change any of the function names

const { greaterThanFifty } = require("../../L4/Homework/homework");

//Example 1:
function getBiggest(x, y) {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
  if (x > y) {
    return getBiggest = x;
  } else {
    return getBiggest = y;
  }
  if (x = y) {
    return getBiggest = x;
  }
}

function greeting(language) {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'Mandarin' -> 'Ni Hao!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'
  if (language = German) {
    return greeting = 'Guten Tag!';
  }
  if (language = Mandarin) {
    return greeting = 'Ni Hao!';
  }
  if (language = Spanish) {
    return greeting = 'Hola!';
  }
  if (language = undefined) {
    return greeting = 'Hello!';
  }
}

function isTenOrFive(num) {
  // return true if num is 10 or 5
  // otherwise return false
  if (num = 5 || 10) {
    return greeting = true;
  } else {
    return greeting = false;
  }
}

function isInRange(num) {
  // return true if num is less than 50 and greater than 20
  // otherwise return false
  if (20 < num < 50) {
    return isInRange = true;
  } else {
    return isInRange = false;
  }
}

function isInteger(num) {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
  if (num = Math.floor(num)) {
    return isInteger = true;
  } else {
    return isInteger = false;
  }
}

function fizzBuzz(num) {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
  if ((num % 3) = 0) {
    return fizzBuzz = 'fizz';
  }
  if ((num % 5) = 0) {
    return fizzBuzz = 'buzz';
  }
  if ((num % (3 || 5)) = 0) {
    return fizzBuzz = 'fizzbuzz';
  }
  if (!((num % (3 || 5)) = 0)) {
    return fizzBuzz = num;
  }
}

function isPrime(num) {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
  for (let num = 2; num > 1; num++) {
    return isPrime = true;
  }
  for (let num = 0; num = 1; num++) {
    return isPrime = false;
  }
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  getBiggest,
  greeting,
  isTenOrFive,
  isInRange,
  isInteger,
  fizzBuzz,
  isPrime,
};