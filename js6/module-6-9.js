function changeEven(numbers, value) {
    // Пиши код ниже этой строки
  
  let newArr = [];

  numbers.forEach(element => {
        if (element % 2 === 0) {
          newArr.push(element + value);
        } else if (element % 2 !== 0) {
          newArr.push(element);
        }
    });
    return newArr;
    // Пиши код выше этой строки
  }

console.log(changeEven([1, 2, 3, 4, 5], 10));
console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
console.log(changeEven([17, 24, 68, 31, 42], 100));
console.log(changeEven([44, 13, 81, 92, 36, 54], 100));

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// /*
//  * Фильтруем четные числа. Далее, на результате метода filter,
//  * вызываем map и множим на 2. После чего на результате
//  * метода map вызываем reverse.
//  */

// const result = numbers
//   .filter(x => x % 2 === 0)
//   .map(y => y * 2)
// //   .reverse();

// console.log(result);