function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
    // Пиши код ниже этой строки
    
    orderedItems.forEach(function (item) {
        totalPrice += item;
    });

  // Пиши код выше этой строки
  return totalPrice;
};

console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));