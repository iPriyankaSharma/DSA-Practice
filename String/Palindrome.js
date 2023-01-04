// Check string values if string patterns are same from front to back to back to front string CharacterData.

// Method 1 - match first string val to last string value.

const palindrome = (str) => {
  let strVal = str.toString().toLowerCase();
  let start = strVal[0];
  let end = strVal[strVal.length - 1];
  console.log(start, end);
  if (start === end) {
    return "Palindrome";
  } else {
    return "Not Palindrome.";
  }
};

palindrome("Madam");

// Method 2 - Used in-built method.

const isPalindrome = (str) => {
  const cleanStr = str.toString().toLowerCase();
  const reverseStr = cleanStr.split("").reverse().join("");
  return cleanStr === reverseStr ? "Palindrome" : "Not Palindrome";
};

isPalindrome("Madam");

// Method 3 - for loop method.

const isPalindromeVal = (string) => {
  let str = string.toString().toLowerCase();
  let len = str.length;

  for (let i = 0; i < len / 2; i++) {
    if (str[i] === str[len - 1 - i]) {
      return "Palindrome.";
    } else return "Not Palindrome.";
  }
};

isPalindromeVal("Madam");
