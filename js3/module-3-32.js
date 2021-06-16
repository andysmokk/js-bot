// Change code below this line
// function addOverNum(first, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > first)
//       total += arg;
//   }
function addOverNum(...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > args[0])
      total += arg;
  }

  return total;
  // Change code above this line
}

console.log(addOverNum(50, 15, 27));
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
console.log(addOverNum(15, 32, 6, 13, 19, 8));
console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));