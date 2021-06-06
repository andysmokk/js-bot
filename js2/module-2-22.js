function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line

  for (let i = min; i <= max; i += 1) {
    numbers.push(i)
  }

  // Change code above this line
  return numbers;
}

console.log(createArrayOfNumbers(1, 3));
console.log(createArrayOfNumbers(14, 17));
console.log(createArrayOfNumbers(29, 34));
console.log(createArrayOfNumbers(140, 145));
