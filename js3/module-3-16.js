function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
  
  for (const salary of Object.values(salaries)) {
    totalSalary += salary;
  }

  // Change code above this line
  return totalSalary;
}

console.log(countTotalSalary({}));
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));