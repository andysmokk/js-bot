function makeStringFromArray(array, delimeter) {
  let string;
  // Change code below this line

  string = array.join(delimeter);

  console.log(string);

  // Change code above this line
  return string;
}


makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ");
makeStringFromArray(["M", "a", "n", "g", "o"], "");
makeStringFromArray(["top", "picks", "for", "you"], "_")
