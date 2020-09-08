/**
 * Cipher a given string using the Caesar Cipher method
 * 
 * @param {string} string the string to cipher
 * @param {number} offset the number of characters to spin
 */
function cipher(string, offset) {
  // set up an empty string to store our ciphered string in
  let caesar = '';
  // set up two alphabets
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // loop over each character in the string
  for (let x = 0; x < string.length; x++) {
    // get the current character
    const char = string[x];
    // find the index of the current character in the alphabet/s
    const index = alpha.indexOf(char);
    const upperIndex = upper.indexOf(char);
    // if the character is not in either alphabet, just use the
    // original character (i.e. space/symbol/number/etc.)
    if (index === -1 && upperIndex === -1) {
      caesar += char;
    // if the character is in the lowercase alphabet
    } else if (index !== -1) {
      // get the new position of the offset letter (i.e. if the
      // char is p, then index will be 15. If the offset is 13
      // then the position will be 2 because1 "(15 + 13) % 26 = 2"
      const position = (index + offset) % 26;
      // add the ciphered character to the caesar string
      caesar += alpha[position];
    // if it wasn't in the lower, it must be an upper
    } else {
      // do the same as above, but for the uppercase alphabet
      const position = (upperIndex + offset) % 26;
      caesar += upper[position];
    }
  }

  // return the ciphered string
  return caesar;
}

// call the function and pass the result to console.log
console.log(cipher('Genius without education is like silver in the mine!', 13));