function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line
  
    message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!"
    
    console.log(message)

  // Change code above this line
  return message;
}

checkPassword("jqueryismyjam");
checkPassword("angul4r1sl1f3");
checkPassword("r3actsux");