function slugify(title) {
  // Change code below this line
  let string;

  string = title.toLowerCase().split(' ').join('-');

  console.log(string);

  return string;

  // Change code above this line
}

slugify("Arrays for begginers");
slugify("English for developer");
slugify("Ten secrets of JavaScript");
slugify("How to become a JUNIOR developer in TWO WEEKS");