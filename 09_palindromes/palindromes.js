const palindromes = function (string) {
  // preprocess to lowercase and strip punctuation and spaces
  let nonalphanumeric = /\W/g;
  let processed = string.toLowerCase().replace(nonalphanumeric, "");
  console.log(processed);

  // two pointers
  let right = processed.length - 1;
  for (let left = 0; left < right; left++) {
    if (processed[left] !== processed[right]) {
      return false;
    }
    right--;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
