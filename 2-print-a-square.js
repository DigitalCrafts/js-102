function printSquare(size) {
  for (let x = size; x > 0; x--) {
    console.log('🔥'.repeat(size));
  }
}

printSquare(5);
/* Should print this:

🔥🔥🔥🔥🔥
🔥🔥🔥🔥🔥
🔥🔥🔥🔥🔥
🔥🔥🔥🔥🔥
🔥🔥🔥🔥🔥

*/