function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange; // Change this line

    console.log(isNotInRange);
  return isNotInRange;
}

isNumberNotInRange(10, 30, 17); //false
isNumberNotInRange(10, 30, 5); // true
isNumberNotInRange(20, 50, 24); // false
isNumberNotInRange(20, 50, 76); // true
