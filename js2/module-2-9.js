function getExtremeElements(array) {
  // Change code below this line
  
  // array.splice(1, array.length - 2);
  // return array

  const firstElem = array.shift();
  const lastElem = array.pop();
  
  console.log(firstElem)
  console.log(lastElem)
  
  const newArray = [firstElem, lastElem];

  return newArray

  // Change code above this line
}

console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));