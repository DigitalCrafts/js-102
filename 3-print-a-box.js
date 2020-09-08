function printBox(width, height) {
  const char = '💩';
  const space = '  ';
  for (let y = 1; y <= height; y++) {
    if (y == 1 || y == height) {
      console.log(char.repeat(width))
    } else {
      console.log(char + space.repeat(width - 2) + char)
    }
  }
}

printBox(6, 4);