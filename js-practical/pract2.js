console.log('¿Hola Mundo?');

function convertHTML(str) {
  let arr = str.split('');

  for (let i = 0; i < arr.length; i += 1) {
    switch (arr[i]) {
      case '&':
        arr[i] = '&amp;';
        break;
    }
  }
  arr = arr.join('');
  return arr;
}

console.log(convertHTML('Dolce & Gabbana'));

// function uniteUnique(...arr) {
//   const newArr = arr.flat();
//   const result = newArr.filter((num, idx, arr) => arr.indexOf(num) === idx);
//   return result;
// }

// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

// function myReplace(str, before, after) {
//   const arr = str.split(' ');
//   if (before[0] === before[0].toUpperCase()) {
//     after = after.replace(after[0], after[0].toUpperCase());
//   } else {
//     after = after.replace(after[0], after[0].toLowerCase());
//   }
//   const idx = arr.indexOf(before);
//   arr.splice(idx, 1, after);
//   str = arr.join(' ');
//   return str;
// }

// console.log(myReplace('I think we should look Up there', 'Up', 'down'));

// function whatIsInAName(collection, source) {
//   const objKeys = Object.keys(source);

//   // Змініть код лише під цим рядком

//   const newArr = collection.filter(obj =>
//     objKeys.every(key => obj.hasOwnProperty(key) && obj[key] === source[key]),
//   );

//   // Змініть код лише над цим рядком
//   return newArr;
// }

// console.log(
//   whatIsInAName(
//     [
//       { first: 'Romeo', last: 'Montague' },
//       { first: 'Mercutio', last: null },
//       { first: 'Tybalt', last: 'Capulet' },
//     ],
//     { last: 'Capulet' },
//   ),
// );

// function destroyer(arr) {
//   const args = [...arguments].slice(1);
//   const resultArr = arr.filter(el => !args.includes(el));
//   return resultArr;
// }

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

// function diffArray(arr1, arr2) {
//   const newArr = arr1
//     .concat(arr2)
//     .filter(el => !arr1.includes(el) || !arr2.includes(el));

//   return newArr;
// }

// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

// function alphabeticalOrder(arr) {
//   // Змініть код лише під цим рядком

//   return arr.sort((a, b) => (a === b ? 0 : a > b ? 1 : -1));
//   // Змініть код лише над цим рядком
// }

// console.log(alphabeticalOrder(['a', 'd', 'c', 'a', 'z', 'g']));

// const squareList = arr => {
//   // Змініть код лише під цим рядком
//   return arr
//     .filter(num => Math.floor(num) === num && Math.sign(num) !== -1)
//     .reduce((acc, num) => {
//       acc.push(num * num);
//       return acc;
//     }, []);
//   // Змініть код лише над цим рядком
// };

// const squaredIntegers = squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]);
// console.log(squaredIntegers);

// // Глобальна змінна
// const watchList = [
//   {
//     Title: 'Inception',
//     Year: '2010',
//     Rated: 'PG-13',
//     Released: '16 Jul 2010',
//     Runtime: '148 min',
//     Genre: 'Action, Adventure, Crime',
//     Director: 'Christopher Nolan',
//     Writer: 'Christopher Nolan',
//     Actors: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy',
//     Plot: 'A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.',
//     Language: 'English, Japanese, French',
//     Country: 'USA, UK',
//     Awards: 'Won 4 Oscars. Another 143 wins & 198 nominations.',
//     Poster:
//       'http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
//     Metascore: '74',
//     imdbRating: '8.8',
//     imdbVotes: '1,446,708',
//     imdbID: 'tt1375666',
//     Type: 'movie',
//     Response: 'True',
//   },
//   {
//     Title: 'Interstellar',
//     Year: '2014',
//     Rated: 'PG-13',
//     Released: '07 Nov 2014',
//     Runtime: '169 min',
//     Genre: 'Adventure, Drama, Sci-Fi',
//     Director: 'Christopher Nolan',
//     Writer: 'Jonathan Nolan, Christopher Nolan',
//     Actors: 'Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow',
//     Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     Language: 'English',
//     Country: 'USA, UK',
//     Awards: 'Won 1 Oscar. Another 39 wins & 132 nominations.',
//     Poster:
//       'http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg',
//     Metascore: '74',
//     imdbRating: '8.6',
//     imdbVotes: '910,366',
//     imdbID: 'tt0816692',
//     Type: 'movie',
//     Response: 'True',
//   },
//   {
//     Title: 'The Dark Knight',
//     Year: '2008',
//     Rated: 'PG-13',
//     Released: '18 Jul 2008',
//     Runtime: '152 min',
//     Genre: 'Action, Adventure, Crime',
//     Director: 'Christopher Nolan',
//     Writer:
//       'Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)',
//     Actors: 'Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine',
//     Plot: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.',
//     Language: 'English, Mandarin',
//     Country: 'USA, UK',
//     Awards: 'Won 2 Oscars. Another 146 wins & 142 nominations.',
//     Poster:
//       'http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
//     Metascore: '82',
//     imdbRating: '9.0',
//     imdbVotes: '1,652,832',
//     imdbID: 'tt0468569',
//     Type: 'movie',
//     Response: 'True',
//   },
//   {
//     Title: 'Batman Begins',
//     Year: '2005',
//     Rated: 'PG-13',
//     Released: '15 Jun 2005',
//     Runtime: '140 min',
//     Genre: 'Action, Adventure',
//     Director: 'Christopher Nolan',
//     Writer:
//       'Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)',
//     Actors: 'Christian Bale, Michael Caine, Liam Neeson, Katie Holmes',
//     Plot: 'After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.',
//     Language: 'English, Urdu, Mandarin',
//     Country: 'USA, UK',
//     Awards: 'Nominated for 1 Oscar. Another 15 wins & 66 nominations.',
//     Poster:
//       'http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg',
//     Metascore: '70',
//     imdbRating: '8.3',
//     imdbVotes: '972,584',
//     imdbID: 'tt0372784',
//     Type: 'movie',
//     Response: 'True',
//   },
//   {
//     Title: 'Avatar',
//     Year: '2009',
//     Rated: 'PG-13',
//     Released: '18 Dec 2009',
//     Runtime: '162 min',
//     Genre: 'Action, Adventure, Fantasy',
//     Director: 'James Cameron',
//     Writer: 'James Cameron',
//     Actors: 'Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang',
//     Plot: 'A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
//     Language: 'English, Spanish',
//     Country: 'USA, UK',
//     Awards: 'Won 3 Oscars. Another 80 wins & 121 nominations.',
//     Poster:
//       'http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg',
//     Metascore: '83',
//     imdbRating: '7.9',
//     imdbVotes: '876,575',
//     imdbID: 'tt0499549',
//     Type: 'movie',
//     Response: 'True',
//   },
// ];

// function getRating(watchList) {
//   // Змініть код лише під цим рядком
//   let averageRating;
//   let count = 0;

//   averageRating = watchList.reduce((acc, el) => {
//     if (el.Director === 'Christopher Nolan') {
//       count++;
//       return (acc += Number(el.imdbRating));
//     }
//     return acc / count;
//   }, 0);

//   // Змініть код лише над цим рядком
//   return averageRating;
// }

// console.log(getRating(watchList));

// function squareDigits(num) {
//   return Number(
//     ('' + num)
//       .split('')
//       .map(el => el * el)
//       .join(''),
//   );
// }

// console.log(squareDigits(2112));
// console.log(squareDigits(3212));
// console.log(squareDigits(8952036));

// function spinWords(string) {
//   const arr = string.split(' ');
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     const word =
//       arr[i].length > 4 ? arr[i].split('').reverse().join('') : arr[i];
//     newArr.push(word);
//   }
//   return newArr.join(' ');
// }

// console.log(spinWords('This is a test'));
// console.log(spinWords('Hey fellow warriors'));
// console.log(spinWords('Welcome'));
// let condition = true;

// function bar() {
//   var firstName = 'John'; // Доступно во всей функции
//   return firstName;
// }
// const array = [{ id: 1 }];
// const array2 = { id: 1 };

// const createObj = Object.create(array2);
// console.log('🚀 ~ file: pract2.js ~ line 13 ~ createObj', createObj);

// const id = createObj.id;
// const array2Id = array2.id;
// console.log('🚀 ~ file: pract2.js ~ line 17 ~ array2Id', array2Id);
// console.log('🚀 ~ file: pract2.js ~ line 16 ~ id', id);

// const isArray = Array.isArray(array);
// const isArray2 = Array.isArray(array2);

// console.log(typeof array);
// console.log(typeof array2);

// if (isArray2) {
//   console.log('is array');
// } else {
//   console.log('not is array');
// }

// const array = [1, 2, 3, 4, 5];
// const array2 = [1, 2, 3, 4, 5];

// const newArray = array.concat(array2);
// const newArray = [...array, ...array2];

// console.log(newArray);

// console.log(cat);

// let cat;

// let arr;
// arr = 2;
// console.log('🚀 ~ file: pract2.js ~ line 4 ~ arr', arr);

// function mar(a, b) {
//   return eval('a + b');
// }

// console.log(mar('1', '1'));

// console.log('🚀 ~ file: pract2.js ~ line 14 ~ 10 === 10', 'aaaa' == 10);

// const obj1 = {
//   id: 1,
//   data: 'string',
//   link: 'https://www.fo.com',
// };

// const obj2 = {
//   id: 2,
//   data: 'string',
//   link: 'https://www.fo.com',
// };
// const fff = { id: 1, data: 'string' };
// const clone = Object.assign(obj1, obj2);
// const clone = { ...fff };
// console.log('🚀 ~ file: pract2.js ~ line 29 ~ clone', clone);

// let id = Symbol('id');
// console.log(id);
// console.log(id.toString());
// console.log(id.description);

// let user = {
//   name: 'Вася',
// };

// let id = Symbol('id');

// user[id] = 1;

// console.log(user);

// function find_max(nums) {
//   let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
//   for (let num of nums) {
//     if (num > max_num) {
//       max_num = num;
//       // (Fill in the missing line here)
//     }
//   }
//   return max_num;
// }

// console.log(find_max([105, 33, 99, 45, 1, 2, 107, 6]));
// for (var i = 1; i < 10; i++) {
//   setTimeout(function () {
//     console.log(i), 0;
//   });
// }

// for (var i = 1; i < 10; i++) {
//   console.log(i), 0;
// }

// const elements = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];

// const ingredientsRef = document.querySelector('#ingredients')

// const markup = elements.map(el => {
//     const li = document.createElement('li')
//     li.innerHTML = `<p>${el}</p>`
//     return li
// });

// ingredientsRef.append(...markup)

// const galleryRef = document.querySelector('#gallery');

// const createImageEl = (acc,{url,alt}) => acc + `<li class="gallery__item">
//  <img class="gallery__img" src="${url}" alt="${alt}"></li>`;

// const markup = images.reduce(createImageEl,'');
// console.log(markup);
// galleryRef.insertAdjacentHTML('beforeend',markup);

// let counterValue = 0;
// const [decrement, span, increment] =
//   document.querySelector("#counter").children;
// decrement.onclick = () => {
//   counterValue -= 1;
//   span.textContent = counterValue;
// };

// increment.onclick = () => {
//   counterValue += 1;
//   span.textContent = counterValue;
// };

// const nameInputRef = document.querySelector("#name-input");
// console.log(nameInputRef);

// const nameOutputRef = document.querySelector('#name-output');

// function changeName() {
//   nameOutputRef.textContent = nameInputRef.value.trim() ? nameInputRef.value : 'незнакомец';
// }

// nameInputRef.addEventListener('input', changeName);

// const inputRef = document.querySelector('#validation-input');
// console.log(inputRef);

// const changeNumber = function (event) {
//   if (event.currentTarget.value.length === +inputRef.dataset.source) {
//       inputRef.classList.add('valid');
//       inputRef.classList.remove('invalid');
//   } else {
//     inputRef.classList.add('invalid');
//     inputRef.classList.remove('valid');
//   }
// };

// const inputRef = document.querySelector('#validation-input');

// const changeNumber = function ({ target: { value } }) {
//   value.length === +inputRef.dataset.length
//     ? togleClass('valid', 'invalid')
//     : togleClass('invalid', 'valid');
// };

// function togleClass(add, rem) {
//   inputRef.classList.add(add);
//   inputRef.classList.remove(rem);
// }

// inputRef.addEventListener('blur', changeNumber);

// const numberInput = document.querySelector('input[type="number"]');
// const buttonRender = document.querySelector('button[data-action="render"]');
// const buttonClear = document.querySelector('button[data-action="destroy"]');
// const boxGallery = document.querySelector('div#boxes');
// let defaultSize = 30;
//  const handleButtonRenderClick = ()=> {
// const amount = +numberInput.value;
// createBoxes(amount);
//  }
//  const createBoxes = (amount) => {
//   const collection= [];
//   for(let i=0; i<amount;i+=1) {
//     const div = document.createElement('div');
//     div.style.backgroundColor = createRandom();
//     div.style.width = defaultSize + 'px';
//     div.style.height = defaultSize + 'px';
//     defaultSize += 10;
//     collection.push(div)
//   }
//   boxGallery.append(...collection);
// }
//  const handleButtonClearClick = ()=> {
// boxGallery.innerHTML = '';
// defaultSize=30;
// numberInput.value = 0;
// }
// function createRandom() {
//   return `rgb(${(Math.random() * 255) << 0}, ${(Math.random() * 255) << 0}, ${
//     (Math.random() * 255) << 0
//   })`;
// }
// buttonRender.addEventListener('click', handleButtonRenderClick);
// buttonClear.addEventListener('click', handleButtonClearClick);
