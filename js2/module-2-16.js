function checkStorage(available, ordered) {
  let message;
  // Change code below this line

  if (ordered >= available) {
    message = 'Not enough goods in stock!';
  } else {
    message = 'Order is processed, our manager will contact you.';
  }
  
    console.log(message)
  // Change code above this line
  return message;
}

checkStorage(100, 50)
checkStorage(100, 130)
checkStorage(200, 20)
checkStorage(200, 150)
checkStorage(150, 180)