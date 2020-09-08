function factor(number) {
  let factors = [];
  for (let x = 0; x <= number; x++) {
    if (number % x === 0) {
      factors.push(x);
    }
  }
  return factors;
}

console.log(factor(8));













