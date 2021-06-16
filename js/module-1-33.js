function formatMessage(message, maxLength) {
  let result;
  // Change code below this line

  //  if (message.length > maxLength) {
  // const mes = message.slice(message, maxLength);
  //   result = `${mes}...`;
  // } else {
  // result = message;
  // }
  
    result = message.length < maxLength ? message : message.slice(message, maxLength) + "...";
    
    console.log(result)

  /// Change code above this line
  return result;
}

formatMessage("Curabitur ligula sapien", 16);
formatMessage("Curabitur ligula sapien", 23);
formatMessage("Vestibulum facilisis purus nec", 20);
formatMessage("Vestibulum facilisis purus nec", 30);
formatMessage("Nunc sed turpis a felis in nunc fringilla", 15);
formatMessage("Nunc sed turpis a felis in nunc fringilla", 41);