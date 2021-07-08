// import usersArr from './users.js'
// console.log(usersArr)

// Task 1

// Получить массив имен всех пользователей (поле name).

// const getUserNames = (users) => users.map(el => el.name);

// console.log(getUserNames(usersArr))
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// Task 2

// Получить массив объектов пользователей по цвету глаз (поле eyeColor).

// const getUsersWithEyeColor = (arr, color) => users.filter(user => user.eyeColor === color);

// console.log(getUsersWithEyeColor(users, 'green')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// Task 3

// Получить массив имен пользователей по полу (поле gender)
// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// const getUsersWithGender = (users, gender) => users.filter(user => user.gender === gender).map(user => user.name);
// const getUsersWithGender = (users, gender) => {
//     return users.reduce((acc, user) => )
// }

// console.log(getUsersWithGender(usersArr, 'male'));

// Task 4

// Получить массив только неактивных пользователей (поле isActive).
// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// const getInactiveUsers = (users) => users.filter(user => !user.isActive)

// console.log(getInactiveUsers(usersArr));

// Task 5

// Получить пользователя (не массив) по email (поле email, он уникальный).
// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// Task 6

// Получить массив пользователей в возрасте от min до max

// C );
// [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
// console.log( getUsersWithAge( users, 30, 40 ) );
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// const getUsersWithAge = (users, minAge, maxAge) => users.filter(user => user.age >= minAge && user.age <= maxAge);

// console.log( getUsersWithAge( users, 30, 40 ) );

// Task 7

// Получить общую сумму баланса (поле balance) всех пользователей.
// console.log(calculateTotalBalance(users)); // 20916

// const calculateTotalBalance = (users) => users.reduce((total, user) => total + user.balance, 0);

// console.log(calculateTotalBalance(usersArr));

// Task 8

// Дополни функцию getTotalBalanceByGender(users, gender, maxAge) так, чтобы она возвращала
// общий баланс пользователей (свойство balance), пол которых
// (свойство gender) совпадает со значением параметра gender и возраст которых меньше, чем maxAge.
// console.log(getTotalBalanceByGender(users, "male", 35));

// const getTotalBalanceByGender = (users, gender, maxAge) => {
//     return users
//         .filter(user => user.age < maxAge && user.gender === gender)
//         .reduce((total, user) => total + user.balance, 0);
// };

// console.log(getTotalBalanceByGender(usersArr, "male", 35));

// Task 10

// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть
// повторяющихся умений и они должны быть отсортированы в алфавитном порядке.
// console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

// const getSortedUniqueSkills = users => {
//     return users
//         .flatMap(user => user.skills)
//         .filter((skill, idx, skills) => skills.indexOf(skill) === idx)
//         .sort((a, b) => a.localeCompare(b))
//         .reverse();
// };

// console.log(getSortedUniqueSkills(usersArr));

// Task 11

// Напишите функцию getSums(arr), которая возвращает массив его частичных сумм.
// Иначе говоря, вызов getSums(arr) должен возвращать новый массив из такого же числа элементов,
// в котором на каждой позиции должна быть сумма элементов arr до этой позиции включительно.

// То есть:
// для arr = [ 1, 2, 3, 4, 5 ]
// getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]
// Функция не должна модифицировать входной массив.
// В решении используйте метод arr.reduce.

// const getSums = (arr) =>
//   arr.reduce((acc, num, i) => (i > 0 ? [...acc, acc[i - 1] + num] : [num]), []);

// const arr = [1, 2, 3, 4, 5];
// const getSums = (arr) => {
//   let result = 0;
//   return arr.reduce(
//     (acc, el) => {
//       result += el;
//       acc.push(result)
//       return acc;
//  }, []);
// };

// const arr = [ 1, 2, 3, 4, 5 ]

// const getSums = (arr) => {
//     let result = 0;
//     return arr.reduce((acc, el) => {
//         result += el;
//         acc.push(result);
//         return acc;
//     }, []);
// };

// Task 12

// Возврат: строка, отформатированная как список имен,
// разделенных запятыми, за исключением последних двух имен,
// которые должны быть разделены амперсандом.

// [{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}] Вернет 'Bart, Lisa, Maggie, Homer & Marge',

// [{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}] вернет  'Bart, Lisa & Maggie'

// [{name: 'Bart'},{name: 'Lisa'}] вернет 'Bart & Lisa',

// [{name: 'Bart'}] вернет 'Bart'

// [] вернет ''

// const get = arr => {
//     const names = arr.map(name => name.name)
//     return names.length <= 2 ? names.join(' & ') : names.slice(0, names.length - 1).join(', ') + ' & ' + names.pop();
// };

// const getList = (users) =>
//   users.map(({ name }) => name).length <= 2
//     ? users.map(({ name }) => name).join(" & ")
//     : users
//         .map(({ name }) => name)
//         .slice(0, users.map(({ name }) => name).length - 1)
//         .join(", ") +
//       " & " +
//       users.map(({ name }) => name).pop();

// console.log(get([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }, { name: 'Homer' }]));

// const count = string => {
//     const letters = string.split('');
    
//     return letters.reduce((acc, letter) => {
//         return {
//             ...acc, [letter]: acc[letter] ? acc[letter] + 1 : 1,
//         };
//     }, {});
// };

// console.log(count("abbbaacccabbacccaabbb"));

// const filterList = l => {
// return l.filter(el => Number.isInteger(el))
// };

// console.log(filterList([42, '145', 'ada', 5, '555', 99]));

// // Функция checkPassword(password) получает пароль пользователя
// в параметр password, проверяет его на совпадение с паролем
// администратора в переменной ADMIN_PASSWORD и возвращает сообщение
// о результате сравнения, хранящееся в переменной message.

// // Если значение параметра password равно null, значит пользователь
// отменил операцию и в message записывается строка "Canceled by user!".
// // Если значение параметра password совпадает со значением ADMIN_PASSWORD,
// в переменную message присваивается строка "Welcome!".
// // Если ни одно из предыдущих условий не выполнилось,
// в переменную message записывается строка "Access denied, wrong password!".

function checkPassword(password) {
    const ADMIN_PASSWORD = 'jqueryismyjam';
    let message = '';
    if (password === ADMIN_PASSWORD) {
        message = "Welcome!";
    } else if (password === null) {
        message = "Canceled by user!";
    } else message = "Access denied, wrong password!";
    return message;
};

console.log(checkPassword("mangohackzor"));
console.log(checkPassword(null));
console.log(checkPassword("jqueryismyjam"));