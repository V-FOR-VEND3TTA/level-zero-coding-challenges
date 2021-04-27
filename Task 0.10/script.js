// Javascript program to print common characters of two Strings

let MAX_CHAR = 26;
// Function to find similar characters
function printCommon(stringOne, stringTwo) {
  // two arrays of length 26 to store occurrence
  // of a letters alphabetically for each string
  let a1 = new Array(MAX_CHAR);
  let a2 = new Array(MAX_CHAR);
  for (let i = 0; i < MAX_CHAR; i++) {
    a1[i] = 0;
    a2[i] = 0;
  }

  let length1 = stringOne.length;
  let length2 = stringTwo.length;

  for (let i = 0; i < length1; i++)
    a1[stringOne[i].charCodeAt(0) - "a".charCodeAt(0)] += 1;

  for (let i = 0; i < length2; i++)
    a2[stringTwo[i].charCodeAt(0) - "a".charCodeAt(0)] += 1;

  // If a common index is non-zero, it means that the letter corresponding to that index is common to both strings
  for (let i = 0; i < MAX_CHAR; i++) {
    if (a1[i] != 0 && a2[i] != 0) {
      // Find the minimum of the occurrence
      // of the character in both strings and print
      // the letter that many number of times
      for (let j = 0; j < Math.min(a1[i], a2[i]); j++)
        console.log(String.fromCharCode(i + "a".charCodeAt(0)));
    }
  }
}

printCommon("Amazing", "Amazon");
