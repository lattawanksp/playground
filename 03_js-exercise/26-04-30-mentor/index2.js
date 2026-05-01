let string = "";

function checkPalindrome(string) {
  let cleanString = string.toLowerCase();
  let reverseString = "";

  for (let i = cleanString.length - 1; i >= 0; i--) {
    reverseString += cleanString[i];
    // console.log(reverseString);
  }

  if (cleanString === reverseString) {
    return true;
  } else {
    return false;
  }
}

console.log(checkPalindrome("racecar"));
console.log(checkPalindrome("hello"));
console.log(checkPalindrome("PoEoP"));
console.log(checkPalindrome("12321"));
console.log(checkPalindrome("คนทรีเข้าไฟฟไา้ขเีรทนค"));
