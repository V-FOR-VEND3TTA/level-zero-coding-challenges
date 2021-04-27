// Outputting vowels only in a string of letters
function outputVowels(str) {
  var strVowels = "";
  var i;

  for (i in str) {
    if (
      str.charAt(i) == "a" ||
      str.charAt(i) == "e" ||
      str.charAt(i) == "i" ||
      str.charAt(i) == "o" ||
      str.charAt(i) == "u"
    ) {
      strVowels += str.charAt(i);
    }
  }

  i = 0;
  for (i in strVowels) {
    console.log(strVowels.charAt(i));
  }
}

outputVowels("Johannes");
outputVowels("Mazikeen");
