const keys = [];
const values = [];
const advert = {
  service: "apt",
};
const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Change code below this line
  
    if (apartment.hasOwnProperty(key)) {
        keys.push(key);
        values.push(apartment[key]);
    } else {}
  
  // Change code above this line
}

console.log(keys);
console.log(values);