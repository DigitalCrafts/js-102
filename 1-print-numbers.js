function printNumbers(start, end) {
  for (let numbers = start; numbers <= end; numbers++) {
    console.log(numbers);
  }
}

printNumbers(10, 20);


function printNumbersWhile(start, end) {
  let numbers = start;
  while (numbers <= end) {
    console.log(numbers);
    numbers++;
    // numbers = numbers + 1;
    // numbers += 1;
  }
}

printNumbersWhile(10, 20);