/**
 * return an array of the factors of a given number
 * @param {number} number the number to extract factors from
 */
function factor(number) {
  // set up an empty array to store the factors in when
  // we find them
  let factors = [];
  // set up the loop to start at 0 and continue until number
  for (let x = 0; x <= number; x++) {
    // if x can be divided equally into number, then x is a factor
    if (number % x === 0) {
      // if it can, push it into the end of the array
      factors.push(x);
    }
  }

  // return the array with all the numbers in it
  return factors;
}

// call the function and return the result to
// console.log so that we can see it.
console.log(factor(8));













