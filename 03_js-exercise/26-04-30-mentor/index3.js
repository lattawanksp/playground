function checkPalindrome(string) {
  let cleanString = string.toLowerCase();

  let left = 0;
  let right = cleanString.length - 1;

  while (left < right) {
    if (cleanString[left] !== cleanString[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(checkPalindrome("racecar"));
console.log(checkPalindrome("hello"));
