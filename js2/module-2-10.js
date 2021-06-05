function splitMessage(message, delimeter) {
  let words;
  // Change code below this line
  
  words = message.split(delimeter)
  
  console.log(words);

  // Change code above this line
  return words;
}

splitMessage("Mango hurries to the train", " ");
splitMessage("Mango", "");
splitMessage("best_for_week", "_");