function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  
  // Change code below this line
    
  const totalPrice = (orderedQuantity * pricePerDroid) + deliveryFee;
  
  const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`

  // Change code above this line
    
  console.log(message)
  return message;
}

makeOrderMessage(10, 70, 200)
makeOrderMessage(5, 50, 100)

