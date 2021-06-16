const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};

const keys = [];
const values = [];
// Change code below this line

for (let key in apartment) {
    keys.push(key);
    values.push(apartment[key]);
}

console.log(keys);
console.log(values);