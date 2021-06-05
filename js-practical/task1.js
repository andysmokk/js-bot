// TASK 3
// Напишите функцию pow(x,n), которая возвращает x в степени n.
// Иначе говоря, умножает x на себя n раз и возвращает результат.

// function pow(x, y) {

//     const result = Math.pow(x, y)
//     // const result = x ** y;
//     return result;
// }

// console.log(pow(2, 2))

// TASK 2
// Напишите решение, которое вычисляет сумму
// квадратных корней для всех чисел у которых квадратный корень будет целым числом.

// const arr = [4, 3, 5, 16, 16, 33, 4, 9]

// const arr = [4, 3, 5, 16, 16, 33, 4, 9]

// function array(numbers) {

//     const newArray = [];

//     for (let number of numbers) {
//         if (Math.sqrt(number) % 2 === 0) {
//             console.log(Math.sqrt(number))
//         }
        
//     }
//     return newArray;
// }

// console.log(array(array));

// const arr = [3, 4, 24, 23, 43, 16, 16, 4, 9];

// function getSqrt(array) {
//   const resArr = [];
//   for (let num of array) {
//     if (num % Math.sqrt(num) === 0) {
//       resArr.push(Math.sqrt(num));
//     }
//   }
//   return resArr;
// }

// console.log(getSqrt(arr));]



// TASK 3
// напиши функцию которая будет суммировать соседние числа и пушить их в новый массив

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// function arraySum(numbers) {
//   const newArray = [];
//   for (let i = 0; i < numbers.length; i += 2) {
//     newArray.push(numbers[i] + numbers[i + 1]);

//   }
//   return newArray;
// }
// console.log(arraySum(someArr));

// TASK 4

// Функция formatMessage(message, maxLength)
// принимает строку (параметр message) и форматирует её,
// если длина превышает значение в параметре maxLength.

// function formatMessage(message, maxLength) {
//   return message.length > maxLength
//     ? message.slice(0, maxLength) + "..."
//     : message;
// }

// formatMessage("Curabitur ligula sapien", 16); //возвращает 'Curabitur ligula...'.
// formatMessage("Curabitur ligula sapien", 23); //возвращает 'Curabitur ligula sapien'.
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 15); //возвращает 'Nunc sed turpis...'.
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 41); //возвращает 'Nunc sed turpis a felis in nunc fringilla'.

// TASK 5

// Давайте произведём 5 операций с массивом.

// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте «Рэп» и «Регги» в начало массива.

// const styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-ролл');

// console.log(styles);

// const indexOfElem = styles.length / 2;

// styles.splice(indexOfElem, 1, 'Классика');

// console.log(styles);

// const firstElem = styles.shift();

// console.log(firstElem);

// styles.unshift('Рэп', 'Регги');

// console.log(styles);

// TASK 6

// даны 2 массива
// const nums = [1, 2, 3, 4, 5];
// const strs = ["a", "b", "c", "d", "e"];

// Напишите функцию которая будет принимать 2 массива в качестве аргументов
// и вернет новый массив ['1a', '2b', '3c', '4d', '5e']

// function addNewArray(x, y) {
//     const newArray = [];
//     for (let i = 0; i < x.length; i += 1) {
//         newArray.push(x[i] + y[i]);
//     }
//     return newArray;
// }

// console.log(addNewArray(nums, strs));

// TASK 6

// даны 2 массива
// const nums = [1, "b", 3, "d", 5];
// const strs = ["a", 2, "c", 4, "e"];

// Напишите функцию которая будет принимать 2 массива в качестве аргументов
// и вернет новый массив ['1a', '2b', '3c', '4d', '5e']

// function newArr(x, y) {
//   const newArr = [];
//   for (let i = 0; i < x.length; i += 1) {
//     typeof x[i] === "number" ? newArr.push(x[i] + y[i]) : newArr.push(y[i] + x[i]);
//   }
//   return newArr;
// }
// console.log(newArr(strs,nums));

// function checkForSpam(message) {
//     return message.toLowerCase().includes('sale') || message.toLowerCase().includes('spam')

//     // console.log(result)
    
//     // return result;
//   }

// console.log(checkForSpam('Latest technology news') )//false.
// console.log(checkForSpam('JavaScript weekly newsletter'))// false.
// console.log(checkForSpam('Get best sale offers now!') )// true.
// checkForSpam('Amazing SalE, only tonight!') // true.
// checkForSpam('Trust me, this is not a spam message') // true.
// checkForSpam('Get rid of sPaM emails. Our book in on sale!') // true.
// checkForSpam('[SPAM] How to earn fast money?') // true.

// TASK 9
// привести массив к одному уровню

// const tryThis = [
//   [23, 11, ["hello", "world", "Vasya"]],
//   "some str",
//   [777, "word", ["Привет", ["как сюда добраться"]]],
// ];

// console.log(tryThis.join(',').split(','));

// console.log(tryThis.flat(Infinity));
