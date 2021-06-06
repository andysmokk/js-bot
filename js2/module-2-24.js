function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];

  return fruits.includes(fruit); // Change this line
}

console.log(checkFruit("plum"));
console.log(checkFruit("mandarin"));
console.log(checkFruit("pear"));
console.log(checkFruit("Pear"));
console.log(checkFruit("apple"));