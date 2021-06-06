function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
  
  for (const parameter of order) {
  total += parameter;
  }

  // Change code above this line
  return total;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
console.log(calculateTotalPrice([2, 2]));
