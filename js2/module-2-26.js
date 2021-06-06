function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line

  // for (let i = 0; i < order.length; i += 1) {
  //   total += order[i];
  // }

  for (const element of order) {
    total += element;
  }

  // Change code above this line
  return total;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
console.log(calculateTotalPrice([]));

