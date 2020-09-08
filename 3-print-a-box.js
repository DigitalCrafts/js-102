/**
 * Print a box given the two numbers width and height
 * @param {number} width width of the box
 * @param {number} height height of the box
 */
function printBox(width, height) {
  // set up our box pieces
  const char = '💩';
  const space = '  '; // emojis are 2 spaces wide
  // set up our loop to start at 1 and go until the height
  for (let y = 1; y <= height; y++) {
    // if we are on the first or last row
    if (y == 1 || y == height) {
      // log the border character as many times as the width
      console.log(char.repeat(width))
    } else {
      // log the border character once, repeat the insides
      // for as many times as the width minus the two border
      // chars, and then another border character
      console.log(char + space.repeat(width - 2) + char)
    }
  }
}

// call the function
printBox(6, 4);