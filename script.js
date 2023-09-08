const lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  "?": "?",
  ",": ",",
};

function rot13(encodedStr) {
  let decodedArr = []; // Store the decoded characters here

  for (let i = 0; i < encodedStr.length; i++) {
    const char = encodedStr[i];

    // Check if the character is in the lookup table
    if (lookup.hasOwnProperty(char)) {
      // If it is, add the corresponding character from the lookup table to the decodedArr
      decodedArr.push(lookup[char]);
    } else {
      // If it's not in the lookup table, it's a non-alphabetic character, so add it unchanged
      decodedArr.push(char);
    }
  }

  // Convert the array of characters back to a string
  const decodedStr = decodedArr.join('');
  
  return decodedStr;
}

// You can test your code by running the above function and printing it to the console like this:
console.log(rot13("SERR YBIR? NPPVBWBO"));

// Do not change this line
window.rot13 = rot13;
