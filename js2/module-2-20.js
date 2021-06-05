function checkStorage(available, ordered) {
  let message;
  // Change code below this line
  
  if (ordered === 0) {
    message = "There are no products in the order!"
  } else if (ordered > available) {
    message = "Your order is too large, there are not enough items in stock!"
  } else {
    message = "The order is accepted, our manager will contact you"
    }
    
    console.log(message)

  // Change code above this line
  return message;
}

checkStorage(100, 50)
checkStorage(100, 130)
checkStorage(70, 0)
checkStorage(200, 20)
checkStorage(200, 250)
checkStorage(150, 0)
