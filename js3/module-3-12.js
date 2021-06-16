function countProps(object) {
  let propCount = 0;
  // Change code below this line

  // Change code above this line
  return propCount = Object.keys(object).length;
}

console.log(countProps({}));
console.log(countProps({ name: "Mango", age: 2 }));
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));