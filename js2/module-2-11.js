function calculateEngravingPrice(message, pricePerWord) {
   // Change code below this line
 
   const pricePerFrase = message.split('').length * pricePerWord;
  
   return pricePerFrase;

   // Change code above this line
}

calculateEngravingPrice("JavaScript is in my blood", 10);
calculateEngravingPrice("JavaScript is in my blood", 20);
calculateEngravingPrice("Web-development is creative work", 40);
calculateEngravingPrice("Web-development is creative work", 20);