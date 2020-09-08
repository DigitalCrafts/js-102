/**
 * print a banner around the given text
 * @param {string} text the text to display
 */
function printBanner(text) {
  // print the first row of the banner, which is
  // a * multiplied by the length of the text
  // plus 4 (2 borders and two spaces)
  console.log('*'.repeat(text.length + 4))
  // log the text plus its border
  console.log(`* ${text} *`)
  // log the same thing as the first line again
  console.log('*'.repeat(text.length + 4))
}

// call the function
printBanner('Welcome to the DigitalCrafts');