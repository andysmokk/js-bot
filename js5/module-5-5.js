function Car({ brand, model, price }) {
  this.brand = brand;
  this.model = model;
  this.price = price;
};

Car.prototype.getPrice = function() {
  return this.price;
};

Car.prototype.changePrice = function(newPrice) {
  return this.price = newPrice;
};

console.log(Car.prototype.hasOwnProperty('getPrice'));
console.log(Car.prototype.hasOwnProperty('changePrice'));
console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000 }));

console.log(Car.prototype.changePrice(3500));
console.log(Car.prototype.getPrice());