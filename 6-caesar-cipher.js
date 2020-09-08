function cipher(string, offset) {
  let caeser = '';
  string = string.toLowerCase();
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  for (let x = 0; x < string.length; x++) {
    const char = string[x];
    const index = alpha.indexOf(char);
    if (index === -1) {
      caeser += char;
    } else {
      const position = (index + offset) % 26;
      caeser += alpha[position];
    }
  }

  return caeser;
}

console.log(cipher('Genius without education is like silver in the mine!', 13));