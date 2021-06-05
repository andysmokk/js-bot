function checkAge(age) {
  let message;

  if (age >= 18) { // Change this line
    message = 'You are an adult';
  } else {
    message = 'You are a minor';
    }

    console.log(message)
  return message;
}

checkAge(5)
checkAge(18)
checkAge(35)
checkAge(17)