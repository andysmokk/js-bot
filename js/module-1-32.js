function getSubstring(string, length) {
  const substring = string.slice(string, length); // Change this line

    console.log(substring)
  return substring;
}

getSubstring("Hello world", 3);
getSubstring("Hello world", 6);
getSubstring("Hello world", 8);
getSubstring("Hello world", 11);
getSubstring("Hello world", 0);