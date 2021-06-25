const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Пиши код ниже этой строки

const evenNumbers = numbers.filter(element => element % 2 === 0);
const oddNumbers = numbers.filter(element => element % 2 !== 0);

console.log(evenNumbers);
console.log(oddNumbers);