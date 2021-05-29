function checkStorage(available, ordered) {
  let message;
  // Change code below this line

message =  ordered < available ? "The order is accepted, our manager will contact you" : "Not enough goods in stock!";
  
//   if (ordered > available) {
//     message = "Not enough goods in stock!";
//   } else {
//     message = "The order is accepted, our manager will contact you";
//   }
    console.log(message);

  // Change code above this line
  return message;
}

checkStorage(100, 50);
checkStorage(100, 130);
checkStorage(200, 20);
checkStorage(200, 150);
checkStorage(150, 180);
