/**
 * Print all the numbers between start and end (using a for loop)
 * @param {number} start the starting number
 * @param {number} end the ending number
 */
function printNumbers(start, end) {
  // set up for loop. while number is less than the ending number,
  // continue the loop and increase the number count
  for (let number = start; number <= end; number++) {
    console.log(number);
  }
}

printNumbers(10, 20);

/**
 * Print all the numbers between start and end (using a while loop)
 * @param {number} start the starting number
 * @param {number} end the ending number
 */
function printNumbersWhile(start, end) {
  // set the starting number to 'start'
  let number = start;
  // while number is less than the end
  while (number <= end) {
    console.log(number);
    number++;
    // ^ same as: numbers = numbers + 1;
    // ^ same as: numbers += 1;
  }
}

// call the function
printNumbersWhile(10, 20);