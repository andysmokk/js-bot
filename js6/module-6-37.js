const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];
// Пиши код ниже этой строки

const sortedByAuthorName = [...books].sort((firstName, secondName) => firstName.author.localeCompare(secondName.author));
const sortedByReversedAuthorName = [...books].sort((firstName, secondName) => secondName.author.localeCompare(firstName.author));
const sortedByAscendingRating = [...books].sort((firstRating, secondRating) => firstRating.rating - secondRating.rating);
const sortedByDescentingRating = [...books].sort((firstRating, secondRating) => secondRating.rating - firstRating.rating);

console.log(sortedByAuthorName);
console.log(sortedByReversedAuthorName);
console.log(sortedByAscendingRating);
console.log(sortedByDescentingRating);