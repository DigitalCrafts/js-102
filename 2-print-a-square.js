/**
 * Print a square of a given size
 * @param {number} size size of the square
 */
function printSquare(size) {
  // Set up the loop to start at zero, and count until it reaches the size.
  for (let x = 0; x < size; x++) {
    // log a string to the console that repeats for as long as 'size'
    console.log('🔥'.repeat(size));
  }
}

// call the function
printSquare(5);