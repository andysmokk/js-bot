const scientists = [
  {
    name: "Albert",
    surname: "Einstein",
    born: 1879,
    dead: 1955,
    id: 1,
  },
  {
    name: "Isaac",
    surname: "Newton",
    born: 1643,
    dead: 1727,
    id: 2,
  },
  {
    name: "Galileo",
    surname: "Galilei",
    born: 1564,
    dead: 1642,
    id: 3,
  },
  {
    name: "Marie",
    surname: "Curie",
    born: 1867,
    dead: 1934,
    id: 4,
  },
  {
    name: "Johannes",
    surname: "Kepler",
    born: 1571,
    dead: 1630,
    id: 5,
  },
  {
    name: "Nicolaus",
    surname: "Copernicus",
    born: 1473,
    dead: 1543,
    id: 6,
  },
  {
    name: "Max",
    surname: "Planck",
    born: 1858,
    dead: 1947,
    id: 7,
  },
  {
    name: "Katherine",
    surname: "Blodgett",
    born: 1898,
    dead: 1979,
    id: 8,
  },
  {
    name: "Ada",
    surname: "Lovelace",
    born: 1815,
    dead: 1852,
    id: 9,
  },

  {
    name: "Lise",
    surname: "Meitner",
    born: 1878,
    dead: 1968,
    id: 11,
  },
  {
    name: "Sarah E.",
    surname: "Goode",
    born: 1855,
    dead: 1905,
    id: 10,
  },
  {
    name: "Hanna",
    surname: "Hammarström",
    born: 1829,
    dead: 1909,
    id: 12,
  },
];

//   Найти год рождения Albert Einstein
//   Узнать все ли ученые работала в 19 ст

const findYearBirth = (name, surname, array) => {
  const result = array.find(scientist => scientist.name === name && scientist.surname === surname);
  
  // return result?.born;
  return result?.born ?? `Такого ученого нет`;
  // return result ? result.born : `Такого ученого нет`;
};

// const findCenturyWork = (startCentury, endCentury) =>
//   scientists.filter(scientist => (scientist.born > startCentury && scientist.born < endCentury)
//     || (scientist.dead > startCentury && scientist.dead < endCentury))
//     .map(scientist => `${scientist.name} ${scientist.surname}`);

const findCenturyWork = (startCentury, endCentury, scientists) => {
  const result = scientists.filter(scientist => scientist.born >= startCentury && scientist.born < endCentury && scientist.dead > startCentury);
// scientists.every =>>> true/falls
  return result.map(scientist => `${scientist.name} ${scientist.surname}`);
};

// console.log(yearBirthEinstein);
console.log(findYearBirth("Albert", "Einstein", scientists));
console.log(findYearBirth("Nicolaus", "Copernicus", scientists));
console.log(findYearBirth("Duncan", "Maclaut", scientists));

console.log(findCenturyWork(1400, 1499, scientists));
console.log(findCenturyWork(1500, 1599, scientists));
console.log(findCenturyWork(1600, 1699, scientists));
console.log(findCenturyWork(1700, 1799, scientists));
console.log(findCenturyWork(1800, 1899, scientists));


