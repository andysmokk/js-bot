function findLongestWord(string) {
  // Change code below this line

  let array = string.split(' ');
  let longestWord = ' ';
  
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].length >= longestWord.length) {
    longestWord = array[i];
    }
    
  }

  return longestWord;

  // Change code above this line
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("Google do a roll"));
console.log(findLongestWord("May the force be with you"));
