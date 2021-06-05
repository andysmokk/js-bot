function getExtremeElements(array) {
  // Change code below this line

  const deleteElements = array.splice(1, array.length - 2);

  console.log(array)

  return array;

  // Change code above this line
}

getExtremeElements([1, 2, 3, 4, 5]);
getExtremeElements(["Earth", "Mars", "Venus"]);
getExtremeElements(["apple", "peach", "pear", "banana"]);



