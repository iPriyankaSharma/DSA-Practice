// Problem statement - in given series of words, which words is longest common eg.
// hard, hard, had - ha is longest common word. Or one, out, only - o is longest common prefix.

// Method 1 - Double loop - match each str char

let longestCommonPrefix = function (str) {
  if (!str.length) return "";

  for (let i = 0; i <= str[0].length; i++) {
    for (let j = 1; j < str.length; j++) {
      if (str[0][i] !== str[j][i]) {
        return str[0].slice(0, i);
      }
    }
  }
};

// Method 2 - Array.every() - same as method 1 but second array is omitted.

let longestCommon = function (str) {
  if (!str.length) return "";

  for (let i = 0; i <= str[0].length; i++) {
    if (!str.every((string) => str[i] == str[0][i])) {
      return str[0].slice(0, i);
    }
  }
};
