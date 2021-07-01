function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    // Пиши код ниже этой строки

    firstArray.forEach(function (element) {
        if (secondArray.includes(element)) {
            commonElements.push(element);
        }
    });

    // firstArray.forEach(el => secondArray.includes(el) ? commonElements.push(el) : commonElements);
  
    return commonElements;
    // Пиши код выше этой строки
};

console.log(getCommonElements([1, 2, 3], [2, 4]));
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
console.log(getCommonElements([1, 2, 3], [10, 20, 30]));