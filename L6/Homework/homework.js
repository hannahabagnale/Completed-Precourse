// Do not change any of the function names

function returnFirst(arr) {
  // return the first item from the array
  console.log(arr[0]);
  return returnFirst;
}

function returnLast(arr) {
  // return the last item of the array
  console.log(arr[4]);
  return returnLast;
}

function getArrayLength(arr) {
  // return the length of the array
  console.log(arr.length);
  return getArrayLength;
}

function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  // return the array
  let iterator = 1;
  i = arr.length - 1;
  while (iterator >= 0) {
    let num = numbers[iterator]
    num++
  }
  if (num > 0 && <=9) {
    numbers[iterator] = num
    break
  } else {
    numbers[iterator] = 0
    if (iterator == 0) {
      numbers.unshift(1)
      break
    }
    iterator--
  }
  return incrementByOne;
}

function addItemToArray(arr, item) {
  // add the item to the end of the array
  // return the array
  arr.push(item);
  return addItemToArray;
}

function addItemToFront(arr, item) {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
  arr.unshift(item);
  return addItemToFront;
}

function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
  console.log(words.toString());
  return wordsToSentence;
}

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  console.log(arr.incldudes(item));
  return contains;
}

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    const sum = sum + arguments[i]];
  }
  return sum;
}

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  let sum = 0;
  for (let i = 0 < arguments.length; i++) {
    sum = sum + arguments[i];
  }
  let testScores = (sum / testScores.length);
  return averageTestScore;
}

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
  const largest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (largest < numbers[i]) {
        largest = numbers[i];
    }
    console.log(largest);
  }
  return largestNumber;
}

function multiplyArguments() {
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it
  var total = 1;
  if (arguments.length === 0) {
    return total * 0;
  } else {
    for (let i = 0; i < arguments.length; i++) {
      var result = (total *= arguments[i]);
    }
    return result;
  }

}
// Do not modify code below this line.
// --------------------------------

module.exports = {
  returnFirst,
  returnLast,
  getArrayLength,
  incrementByOne,
  addItemToArray,
  addItemToFront,
  wordsToSentence,
  contains,
  addNumbers,
  averageTestScore,
  largestNumber,
  multiplyArguments,
};