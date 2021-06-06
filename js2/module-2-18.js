function calculateTotal(number) {
 // Change code below this line
  
  let result = 0;

  for (i = 0; i <= number; i = i + 1) {

    result += i;

  }

  return result;

  // Change code above this line
}

console.log(calculateTotal(1));
console.log(calculateTotal(3));
console.log(calculateTotal(7));
console.log(calculateTotal(18));
console.log(calculateTotal(24));
console.log(calculateTotal(0));