console.log('¿Hola Mundo?');

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
