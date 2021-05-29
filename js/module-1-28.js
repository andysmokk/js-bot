function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line
  
  switch (password) {
    case null:
      message = "Canceled by user!";
      break;
      
    case ADMIN_PASSWORD:
      message = "Welcome!";
          break;
      
    default:
      message = "Access denied, wrong password!";
  }

//   if (password === null) {
//     message = "Canceled by user!";
//   } else if (password === ADMIN_PASSWORD) {
//     message = "Welcome!";
//   } else {
//     message = "Access denied, wrong password!";
//   }
    console.log(message)

  // Change code above this line
  return message;
}

checkPassword("mangohackzor");
checkPassword(null);
checkPassword("polyhax");
checkPassword("jqueryismyjam");